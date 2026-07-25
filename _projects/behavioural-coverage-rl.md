---
layout: page
title: "One agent, many play styles"
description: "Getting behavioural variety out of a single playtesting agent instead of training a separate one per style."
importance: 2
category: "playtesting agents"
---

An agent trained on a fixed reward plays exactly one way, so covering several play styles normally means training several agents. Changing what an agent wants partway through a session is the obvious alternative and a well-known way to destabilise training. We are investigating architectures that let one agent move between styles while keeping learning stable.
