---
layout: post
title: Explaining Our AI Research Paper from Inside Minecraft
date: 2026-09-24
description: Our latest paper, RIDGE, accepted at IEEE CoG 2026, explores how state-conditioned reward blending allows a single deep RL agent to master multiple play styles.
tags: news publication
thumbnail: assets/posts/ridge-cog2026/minecraft-explainer.jpg
---

We recently went inside Minecraft to explain our new research paper, *RIDGE: State-Conditioned Reward Blending for Behavioral Convergence in Deep RL Game Agents*[cite: 2]. The paper was accepted for an oral presentation at the IEEE Conference on Games (CoG) 2026[cite: 2].

Why Minecraft? Our reinforcement learning agent learns in Crafter, a 2D survival game that works very much like Minecraft. In this environment, the agent chops trees, crafts tools, fights zombies, and tries to stay alive. Presenting the paper from inside a similar block-building world felt like the perfect way to demonstrate the agent's capabilities.

{% include figure.liquid loading="eager" path="assets/posts/ridge-cog2026/youtube-video.jpg" class="img-fluid rounded z-depth-1" alt="Screenshot of the YouTube video explaining the RIDGE paper inside Minecraft" caption="Watch our full video explanation of RIDGE." %}

## The Problem

Usually, reinforcement learning agents are trained around a single play style[cite: 2]. If you want an explorer, a survivor, a craftsman, and a warrior, you traditionally have to train four separate agents[cite: 2]. Simply hard-switching rewards while an agent is learning destabilizes its entire value function[cite: 2].

## Our Idea

Our idea with RIDGE is to train one agent that possesses all four reward profiles and smoothly blends them together based on what is happening in the game[cite: 2]. Instead of needing separate specialists, the agent adapts its priorities as the situation changes[cite: 2]. When its health is low, it prioritizes playing it safe. When it has sufficient resources, it focuses on building. 

## What Happened

The state-conditioned approach led to significant improvements in versatility and performance:
*   **Dual Specialization:** RIDGE was the only agent to successfully reach both the crafting and combat skills. It reached the wood pickaxe about 32% of the time and the wood sword about 26% of the time, whereas each individual specialist only mastered its own designated branch[cite: 2].
*   **Survival Mechanics:** It learned to sleep and wake up safely 0.66 of the time. The fixed agents reached 0.15 or less.
*   **The Importance of State:** When we removed the state-based blending and simply mixed all four rewards equally, performance dropped by 30–50%[cite: 2]. 

One agent with many play styles costs less to train, and it plays much more like a human adapting to a dynamic environment. Beyond games, this idea could potentially extend to adaptive autonomous systems[cite: 2]. 

A big thanks to my co-authors Kevin Christopher Chua, Ali Neshati, Loutfouz Zaman, and Cristiano Politowski, and to the Code & Sorcery/UXID/GaMER Lab at Ontario Tech University[cite: 2].

**Links & Resources:**
- **Full Video:** [Watch on YouTube](https://www.youtube.com/watch?v=1eOKtZ-Df9g)[cite: 2]
- **Code + Paper:** [GitHub Repository](https://github.com/Code-SorceryLab/RIDGE)