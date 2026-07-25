---
layout: page
title: "Automating the move to the GPU"
description: "Generating GPU plumbing for ECS systems automatically, and working out at runtime when the GPU is actually worth it."
importance: 2
category: "engines and performance"
---

ECS should be a good fit for the GPU, but offloading a system means hand-writing the same scaffolding every time: input structures, shaders, buffer transfers, dispatch code. Worse, the entity count where the GPU starts to win is not knowable ahead of time; it shifts with hardware and workload. We are generating that scaffolding from compile-time source analysis and learning the crossover point while the game runs.
