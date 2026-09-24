---
layout: post
title: Explaining Our AI Research Paper from Inside Minecraft
date: 2026-09-24
description: Our latest paper, RIDGE, accepted at IEEE CoG 2026, explores how state-conditioned reward blending allows a single deep RL agent to master multiple play styles.
tags: news publication
---

We recently went inside Minecraft to explain our new research paper, *RIDGE: State-Conditioned Reward Blending for Behavioral Convergence in Deep RL Game Agents*. The paper was accepted for an oral presentation at the IEEE Conference on Games (CoG) 2026.

Why Minecraft? Our reinforcement learning agent learns in Crafter, a 2D survival game that works very much like Minecraft. In this environment, the agent chops trees, crafts tools, fights zombies, and tries to stay alive. Presenting the paper from inside a similar block-building world felt like the perfect way to demonstrate the agent's capabilities.

## The Problem

Usually, reinforcement learning agents are trained around a single play style. If you want an explorer, a survivor, a craftsman, and a warrior, you traditionally have to train four separate agents. Simply hard-switching rewards while an agent is learning destabilizes its entire value function.

## Our Idea

Our idea with RIDGE is to train one agent that possesses all four reward profiles and smoothly blends them together based on what is happening in the game. Instead of needing separate specialists, the agent adapts its priorities as the situation changes. When its health is low, it prioritizes playing it safe. When it has sufficient resources, it focuses on building. 

## What Happened

The state-conditioned approach led to significant improvements in versatility and performance:
*   **Dual Specialization:** RIDGE was the only agent to successfully reach both the crafting and combat skills. It reached the wood pickaxe about 32% of the time and the wood sword about 26% of the time, whereas each individual specialist only mastered its own designated branch.
*   **Survival Mechanics:** It learned to sleep and wake up safely 0.66 of the time. The fixed agents reached 0.15 or less.
*   **The Importance of State:** When we removed the state-based blending and simply mixed all four rewards equally, performance dropped by 30–50%. 

One agent with many play styles costs less to train, and it plays much more like a human adapting to a dynamic environment. Beyond games, this idea could potentially extend to adaptive autonomous systems. 

A big thanks to my co-authors Kevin Christopher Chua, Ali Neshati, Loutfouz Zaman, and Cristiano Politowski, and to the Code & Sorcery Lab at Ontario Tech University.

**Links & Resources:**
- **Full Video:** [Watch on YouTube](https://www.youtube.com/watch?v=1eOKtZ-Df9g)
- **Code + Paper:** [GitHub Repository](https://github.com/Code-SorceryLab/RIDGE)
