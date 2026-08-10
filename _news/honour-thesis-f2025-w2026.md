---
layout: post
date: 2026-05-28
inline: false
related_posts: false
title: Honours Thesis — Class of 2026
---

Proud to share the work of my undergraduate honours thesis students from the Fall 2025–Winter 2026 cohort. Each of them completed an independent research project, wrote a full thesis, and presented their findings. It was a great group to work with.

---

<div class="row mt-4 align-items-center">
  <div class="col-sm-2">
    {% include figure.liquid loading="eager" path="assets/img/honour-thesis/f2025-w2026/alex.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-10">
    <strong>Alex Lowe</strong><br>
    <em>A 2D-Gaming Benchmark for Deep Reinforcement Learning</em><br>
    <small>Can DRL realistically serve as a playtesting tool for indie developers? Alex built a benchmark of three games (Flappy Bird, Pong, Snake) from scratch and trained four algorithms (PPO, A2C, TRPO, RPPO) on a consumer machine without a GPU. The results showed that while trained agents can serve as lightweight balance measurement tools, reward engineering remains the dominant barrier to adoption for small studios.</small><br><br>
    <a href="{{ '/assets/honour-thesis/f2025-w2026/alex.pdf' | relative_url }}" target="_blank">Thesis</a> &nbsp;·&nbsp;
    <a href="{{ '/assets/honour-thesis/f2025-w2026/alex-slides.pdf' | relative_url }}" target="_blank">Slides</a>
  </div>
</div>

---

<div class="row mt-4 align-items-center">
  <div class="col-sm-2">
    {% include figure.liquid loading="eager" path="assets/img/honour-thesis/f2025-w2026/rabia.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-10">
    <strong>Rabia Chattha</strong><br>
    <em>Evaluating Large Language Models for Docstring-to-Code Alignment</em><br>
    <small>How well can LLMs associate documentation with the exact code it describes? Rabia framed this as a structured matching task — replacing docstrings with slot identifiers that models must correctly assign from a candidate list. Evaluating several modern LLMs on real-world repositories, she found that while some models perform strongly, inconsistencies in completeness and reliability remain a challenge.</small><br><br>
    <a href="{{ '/assets/honour-thesis/f2025-w2026/rabia.pdf' | relative_url }}" target="_blank">Thesis</a>
  </div>
</div>

---

<div class="row mt-4 align-items-center">
  <div class="col-sm-2">
    {% include figure.liquid loading="eager" path="assets/img/honour-thesis/f2025-w2026/ryan.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-10">
    <strong>Ryan Ahlborn</strong><br>
    <em>Context-Aware Hint Generation for Serious Games Using Large Language Models in Gidget</em><br>
    <small>Traditional hint systems in educational games rely on manually written rules that are hard to scale. Ryan built an LLM-powered hint pipeline for Gidget, a programming education game, that reads the current game state and the player's attempt, and delivers hints directly inside the game interface. User testing across 88 hint requests showed 80.7% were immediately helpful and 93.2% were factually correct.</small><br><br>
    <a href="{{ '/assets/honour-thesis/f2025-w2026/ryan.pdf' | relative_url }}" target="_blank">Thesis</a> &nbsp;·&nbsp;
    <a href="{{ '/assets/honour-thesis/f2025-w2026/ryan-slides.pdf' | relative_url }}" target="_blank">Slides</a>
  </div>
</div>

---

<div class="row mt-4 align-items-center">
  <div class="col-sm-2">
    {% include figure.liquid loading="eager" path="assets/img/honour-thesis/f2025-w2026/saahir.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-10">
    <strong>Saahir Dhani</strong><br>
    <em>Persona-Based Reward Shaping in Deep Reinforcement Learning</em><br>
    <small>Is reward design alone enough to produce agents with distinct, stable personalities? Saahir introduced three personas — Speedrunner, Survivor, and Greedy — in a custom Breakout environment extended with lives, energy, and special abilities, each trained with PPO using only a different reward function. The results showed clear and consistent behavioral separation across all five measured metrics. A notable finding: the Survivor agent discovered reward hacking by refusing to launch the ball to avoid losing lives, which had to be corrected with an auto-launch constraint.</small><br><br>
    <a href="{{ '/assets/honour-thesis/f2025-w2026/saahir.pdf' | relative_url }}" target="_blank">Thesis</a> &nbsp;·&nbsp;
    <a href="{{ '/assets/honour-thesis/f2025-w2026/saahir-slides.pdf' | relative_url }}" target="_blank">Slides</a>
  </div>
</div>

---

<div class="row mt-4 align-items-center">
  <div class="col-sm-2">
    {% include figure.liquid loading="eager" path="assets/img/honour-thesis/f2025-w2026/saffron.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-10">
    <strong>Saffron Birch</strong><br>
    <em>Can LLM-Driven NPCs Remain in Character? Investigating Challenges in Generative AI-based NPC Development and Testing</em><br>
    <small>LLM-powered NPCs can generate dynamic dialogue, but they struggle with hallucination, personality drift, and adversarial prompts. Saffron built a structured evaluation framework combining a cognitive memory system with a persona monitoring layer across four guardrail dimensions: personality alignment, knowledge filtration, bias mitigation, and narrative adherence. Tested on an NPC configured as Geralt of Rivia from <em>The Witcher 3</em>, the guardrail system raised the all-pass rate from 67.6% to 83.8% on a 37-question adversarial test suite.</small><br><br>
    <a href="{{ '/assets/honour-thesis/f2025-w2026/saffron.pdf' | relative_url }}" target="_blank">Thesis</a> &nbsp;·&nbsp;
    <a href="{{ '/assets/honour-thesis/f2025-w2026/saffron-slides.pdf' | relative_url }}" target="_blank">Slides</a>
  </div>
</div>

---

<div class="row mt-4 align-items-center">
  <div class="col-sm-2">
    {% include figure.liquid loading="eager" path="assets/img/honour-thesis/f2025-w2026/saksham.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-10">
    <strong>Saksham Tejpal</strong><br>
    <em>A Large Dataset of Video Game Patch Notes</em><br>
    <small>Patch notes are a rich but messy record of how games evolve — Steam mixes them with sales posts, community updates, and promotional content, making large-scale study impractical. Saksham built a four-stage pipeline that retrieves, filters, classifies, and serves patch notes at scale: starting from 145,622 games and 1.87 million news items, the pipeline uses Gemini 2.5 Flash to confirm 817,765 genuine patch notes across 68,043 games. It then extracts 8.3 million individual change statements tagged as bug fixes (36.2%), feature additions (45.8%), or balance changes (18.0%), served through a searchable web application.</small><br><br>
    <a href="{{ '/assets/honour-thesis/f2025-w2026/saksham.pdf' | relative_url }}" target="_blank">Thesis</a> &nbsp;·&nbsp;
    <a href="{{ '/assets/honour-thesis/f2025-w2026/saksham-slides.pdf' | relative_url }}" target="_blank">Slides</a>
  </div>
</div>
