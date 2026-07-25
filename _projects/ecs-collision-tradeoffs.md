---
layout: page
title: "What ECS design choices really cost"
description: "Several ways to handle collisions in an Entity-Component-System architecture, and the price each one carries."
importance: 1
category: "engines and performance"
---

ECS is everywhere in real-time simulation and games, and its practical trade-offs are thinly documented. Using collision handling as a performance-intensive stress test, we are implementing a range of design alternatives and measuring them against each other on throughput and on how complex the resulting code is to live with.
