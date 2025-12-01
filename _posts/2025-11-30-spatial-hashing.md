---
layout: post
title: Optimizing 2D Physics Spatial Hashing
date: 2025-11-30 16:40:16
tags: gamedev
author: al
---

# Optimizing 2D Physics: Spatial Hashing in PEAK

In 2D platformers, collision detection is the silent killer of performance. Checking every object against every other object results in O<sub>n</sub><sup>2</sup> complexity, which quickly bottlenecks the CPU as the world grows.

To solve this in PEAK, we implemented **Spatial Hashing**, a broad-phase optimization technique that partitions the game world into a grid of "buckets." This post details our implementation and the architectural decision to use a **Dual Hash system**.

## PEAK – Platform Engine by Al and Kevin

**PEAK** is a small SMB1-style RL/game engine with:
A custom Mario-like environment (MarioCore) using Pygame. A modular reward layer (mario.py) that shapes behavior into different "personas". 

Clean Gym-style API: reset(), step(action), get_action_space(), get_observation_space().

**The core loop is:**
1. Env loads a level from ASCII.
2. Player + enemies/coins/powerups are spawned.
3. Each step(action):
	- Apply input → physics → collisions.
	- Update game objects, anti-stall logic, camera.
	- Compute reward and info.
	- Return (obs, reward, terminated, info).

## The Architecture: Why Two Hashes?

When designing the collision system, we evaluated three primary architectures: a single unified hash, separate hashes for static/dynamic objects, and a hybrid approach.

We selected **Option 2: Dual Spatial Hashes**. In this architecture, we maintain two distinct instances of the spatial hash:

1.  **`static_hash` (TileHash):** Contains walls, floors, and platforms. Built once at level load and treated as read-only.
2.  **`dynamic_hash` (ObjectHash):** Contains enemies, coins, and the player. Cleared and repopulated every single frame.

### Why this approach?

  * **Performance:** By keeping the static geometry in a read-only hash, we maximize cache efficiency and avoid the overhead of re-inserting thousands of wall tiles every frame.
  * **Separation of Concerns:** This mimics industry standards used in engines like Unity and games like *Celeste* (which separates "Solids" from "Actors"). It prevents accidental modification of level geometry.

## Implementation Details

Our `SpatialHash` class is a lightweight grid partitioner. It uses a dictionary to map integer cell coordinates to lists of objects.

### 1\. The Grid Structure

We define a `cell_size` slightly larger than the average object. This ensures most objects sit in only 1–4 cells, keeping queries fast.

```python
class SpatialHash:
    def __init__(self, cell_size=64):
        self.cell_size = cell_size
        # Maps (cx, cy) -> List[obj]
        self.contents = {} 
```

### 2\. Cell Addressing

We convert world-space float coordinates into integer grid indices using floor division.

```python
def _get_cell_coords(self, position: Tuple[float, float]) -> Tuple[int, int]:
    x, y = position
    return int(math.floor(x / self.cell_size)), int(math.floor(y / self.cell_size))
```

### 3\. Insertion

When an object is inserted, we calculate its Axis-Aligned Bounding Box (AABB) and add the object to every cell that the AABB overlaps.

```python
def insert(self, obj):
    target = obj.gObj if hasattr(obj, 'gObj') else obj
    if not target.active:
        return

    # specific AABB calculation
    start_cx, start_cy = self._get_cell_coords((target.x, target.y))
    end_cx, end_cy = self._get_cell_coords((target.x + target.width, target.y + target.height))

    for cx in range(start_cx, end_cx + 1):
        for cy in range(start_cy, end_cy + 1):
            cell = (cx, cy)
            if cell not in self.contents:
                self.contents[cell] = []
            self.contents[cell].append(obj)
```

### 4\. Querying

To find nearby objects, we query a specific rectangle. To handle objects that span multiple cells (and therefore appear in multiple buckets), we use a set of `seen_ids` to ensure we don't return duplicates.

## Integration in MarioCore

PEAK integrates these instances directly into the core game loop.

### The Static Pass (Level Load)

During `_build_level_from_txt`, we populate the **`static_hash`**. This includes ground, platforms, spikes, and goal tiles. Because this data never moves, we never clear this hash. This makes resolving player-environment collisions extremely fast (O(k<sub>tiles</sub>)).

### The Dynamic Pass (Update Loop)

Every frame, `_rebuild_dynamic_hash()` runs:

1.  Clears the `dynamic_hash`.
2.  Iterates through all active entities (Enemies, Coins, Powerups).
3.  Inserts them into the grid based on their new positions.

This allows us to handle Entity-vs-Entity collisions (like a Shell hitting an Enemy) efficiently without checking the entire map.

## Beyond Physics: Rendering

We also leverage the spatial hash for rendering optimization. Instead of sending every object to the GPU, `_draw_entities_from_hash` queries the `dynamic_hash` using the **Camera's view rectangle**.

This serves as an effective frustum culling mechanism: if an enemy is not in a bucket overlapping the camera view, it is never processed for drawing.

## Conclusion

By adopting the **Dual Spatial Hash** architecture, PEAK achieves a balance of simplicity and performance. We avoid the O<sub>n</sub><sup>2</sup> sorting trap, maintain clean code separation between world geometry and active actors, and gain a rendering culling system for free.
