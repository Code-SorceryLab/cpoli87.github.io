---
layout: page
title: Graduate Research Assistant — Code Challenge
description: Build a Super Mario Bros–style platformer and train an agent to play it with Deep Reinforcement Learning (PPO).
permalink: /apply/grad-challenge/
nav: false
sitemap: false
noindex: true
toc:
  sidebar: left
---

*Code & Sorcery Lab — Ontario Tech University*


## Why this challenge exists

This is a screening challenge for prospective **MSc** and **PhD** research assistants. It is deliberately open-ended. We are **not** looking for a state-of-the-art Mario bot — we are looking for how you think: how you turn a fuzzy problem into a well-posed one, how you make engineering trade-offs under a compute and time budget, and how clearly you communicate what you did and why.

A strong submission demonstrates three things at once:

1. **Systems engineering** — you can build a small, correct, deterministic game engine.
2. **RL formulation** — you can cast a game as an MDP and get PPO to actually learn.
3. **Research communication** — you can measure, ablate, and explain your results honestly.

You will not be penalized for a weak agent if your formulation, analysis, and writeup are sound. You *will* be penalized for a "working" agent you can't explain, can't reproduce, or that was copied wholesale.

---

## What to build

The challenge has a **required Core** (everyone) and **optional Stretch goals** (which is where PhD-caliber applicants distinguish themselves). Do the Core well before touching stretch goals — a polished Core beats a broken stretch attempt every time.

### Tier 0 — Core (required of all applicants)

**A. The game — a Super Mario Bros–style platformer, built by you.**

- At least **one complete level**: a start, a reachable goal/flag, solid ground, gaps/pits you can fall into and die, and at least **one enemy type** and **one hazard**.
- Real platformer physics: gravity, a run/move action, and a **jump** with sensible acceleration (not teleporting). Collision with ground, walls, enemies, and the goal.
- The game must be **deterministic given a seed**, **resettable to a clean initial state**, and **runnable headless** (no window required) so it can be driven by a training loop at high speed.
- **You must write the game yourself.** Do **not** use an existing Mario environment (e.g. `gym-super-mario-bros`, the original ROM, or a NES emulator) as your environment. Reimplementing the *idea* of Mario is the point; a generic tile-based platformer of your own is perfectly acceptable and even encouraged.

**B. The environment interface.**

Wrap the game in a clean agent-facing interface — the classic RL contract, in whatever language you choose:

- `reset(seed) -> observation`
- `step(action) -> (observation, reward, terminated, truncated, info)`
- A clearly documented **observation space** (feature vector *or* pixels — your call, justify it), **action space** (discrete is fine), and **reward function**.

If you work in Python, matching the [Gymnasium](https://gymnasium.farama.org/) API is a natural choice but not required.

**C. The agent — PPO.**

- Train an agent with **Proximal Policy Optimization** to play at least level 1.
- Show that it **meaningfully beats a random-action baseline** (e.g. reaches further, dies less, completes the level). You may use an established RL library (Stable-Baselines3, CleanRL, RLlib, Tianshou, an equivalent in your language, etc.) for the Core tier.
- Provide **learning curves** (reward and/or completion rate vs. training steps) and the **trained weights**.

**D. Reproducibility.**

- A single documented command (or short script) that trains from scratch, and another that evaluates/plays a saved agent.
- Fixed seeds, a pinned dependency list, and a config file or CLI flags for the key hyperparameters. A grader on a fresh machine should be able to reproduce your headline result.

### Tier 1 — Stretch (strongly encouraged; where PhD applicants stand out)

Pick the ones that interest you — **depth on two or three beats a shallow pass over all of them.** Tell us in your writeup which you attempted and what you found (including negative results).

- **Generalization.** Train on a set of levels and evaluate on **held-out or procedurally generated levels** the agent never saw. Report the generalization gap. *(This is the single most research-relevant stretch goal.)*
- **PPO from scratch.** Implement PPO yourself — GAE(λ), the clipped surrogate objective, value-function loss, entropy bonus, advantage normalization — with **no RL library**. Show it matches or explains its gap to a library baseline.
- **Reward-shaping ablation.** Compare 2–3 reward designs (e.g. sparse goal-only vs. progress-shaped vs. shaped + time penalty) and quantify the effect on learning speed and final behavior.
- **Observation study.** Compare a hand-crafted feature vector against learning from raw pixels (with a CNN + frame stacking). Discuss sample efficiency vs. generality.
- **Sample efficiency / compute budget.** Given a fixed budget (say ≤ 2 hours on one consumer GPU, or CPU-only), squeeze out the best agent and justify your choices.
- **Robustness.** Add stochasticity (sticky actions, action/observation noise, randomized enemy behavior) and measure how brittle the policy is.
- **Curriculum or exploration.** Curriculum over level difficulty, or an exploration bonus (e.g. RND/ICM), with a measured before/after.

You are **not** expected to do all of these. A focused, well-analyzed investigation of one interesting question is exactly the shape of good research.

---

## Ground rules

- **Language & stack: your choice.** Python + PyTorch is the well-trodden path, but JS/TS, C++, Rust, Julia, C#/Unity, etc. are all welcome. Choose what lets you move fast and reason clearly — and justify the choice in one line.
- **Libraries.** Game engines/frameworks (Pygame, SDL, raylib, Godot, a browser canvas, etc.) are fine for the game. RL libraries are fine for the Core agent. **Exception:** the *"PPO from scratch"* stretch goal must not use an RL library for the algorithm itself.
- **No pretrained agents**, and **no existing Mario RL environments** as your env — build the game yourself.
- **Compute is not the bar.** We assume you have, at most, a single consumer GPU or a laptop CPU. Design for that. We would rather see a clever, efficient setup than a brute-forced one. State what hardware you used and roughly how long training took.
- **Time budget: about 1–2 weeks** of part-time work. Scope accordingly; a tight, finished Core is worth far more than an ambitious unfinished pile.
- **Use of AI assistants / found code is allowed and expected — but disclose it.** Cite libraries, tutorials, and any code you adapted. Note where you used an LLM and for what. Undisclosed copying is the one thing that fails a submission outright. In the interview we will ask you to explain and defend any part of your code, so make sure you understand all of it.

---

## What to submit

A **git repository** (GitHub/GitLab link, or a zip) containing:

1. **Source code** — the game, the environment wrapper, and the training/eval code.
2. **`README`** — how to install, train, and evaluate; the exact commands; hardware used and approximate training time.
3. **Trained weights** for at least your best Core agent.
4. **Results** — learning-curve plots and a short results table. Log with TensorBoard / Weights & Biases / CSV — whatever you like.
5. **A short writeup (2–4 pages, PDF or Markdown)** — see below.
6. **A gameplay artifact** — a short screen recording (GIF/MP4) or a replay script that renders your best agent playing. This is the fun part; show it off.

### The writeup (this carries a lot of weight)

Keep it to **2–4 pages**. Cover:

- **MDP formulation** — your observation space, action space, and reward function, and *why*.
- **Method** — network architecture, key PPO hyperparameters, training procedure.
- **Results** — learning curves, baseline comparison, and any stretch-goal findings, **including what did not work.**
- **Limitations & next steps** — what you'd do with another two weeks or a research budget.
- **Disclosure** — libraries, sources, tutorials, and AI-assistant usage.

We value an honest two-page report with a negative result and a clear analysis over a glossy report that hides the messy parts. Research is mostly the messy parts.

---

## How you'll be evaluated

In short, we score:

| Area | Weight |
|---|---|
| Game correctness & engineering (deterministic, resettable, headless, clean) | 20% |
| RL formulation (obs/action/reward design, sound MDP) | 20% |
| Agent results & the PPO setup (beats baseline, learning curves) | 20% |
| Reproducibility (runs on a fresh machine from your instructions) | 15% |
| Writeup & communication (clarity, honesty, analysis) | 15% |
| Stretch depth / research insight | 10% |

Note the ceiling on "Stretch depth" is intentionally low: **you cannot buy your way out of a broken Core with fancy extras.** Nail the fundamentals first.

---

## Timeline & interview

1. Build your submission (≈ 1–2 weeks part-time).
2. Send your repo/zip link to **cristiano[DOT]politowski[AT]ontariotechu[DOT]ca** with the subject line **"GRAD Challenge — <your name>"**.
3. We review it and schedule a **~45-minute interview**. Expect to:
   - give a short live demo of the game and the agent playing,
   - walk us through your MDP formulation and one design decision you're proud of,
   - answer questions about *any* line of code in your repo, and
   - discuss what you'd investigate next as a research direction.

There are no trick questions. We mainly want to see that the work is yours, that you understand it, and that you enjoy this kind of problem — because that's what the next few years of grad school with us will look like.

---

## Questions

If something here is ambiguous, that's partly intentional — **making reasonable assumptions and stating them clearly is part of the evaluation.** But if you're genuinely blocked, email me and ask.

Good luck, and have fun with it. 🍄
