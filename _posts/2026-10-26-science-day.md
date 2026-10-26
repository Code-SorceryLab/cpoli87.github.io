---
layout: post
title: "Ontario Tech Science Day 2026"
date: 2026-10-26
description: Recapping our lab's involvement in Ontario Tech's Science Day 2026
tags: news
author: sebastian
thumbnail: assets/posts/science-day-2026/thumbnail.jpg
---

On October 17th, Ontario Tech hosted its annual Science Day event - a STEM gathering hosted in the University's Science Building. 

Throughout the day, various keynotes were held. Our lab hosted two keynotes and showcased three projects: 

# Does She Remember How You Felt?

{% include figure.liquid loading="eager" path="assets/posts/science-day-2026/al.jpg" class="img-fluid rounded z-depth-1" width="50%" height="50%" %}

##### *Does she remember how you felt?*

In many new video games, characters talk with you through an AI language model. These characters cannot keep every word that you say, so they write short notes about each conversation. When the notes pile up, the AI rewrites them shorter, and then it does this again and again. AFTERSTATE, Al Shifan's Master’s project, asks what survives all this rewriting: the facts of what happened, or the feelings behind them. 

We tested 12 open AI models on 219 role-play conversations from a fantasy game, and we checked every fact and every feeling after each rewrite. The first results surprised us. Feelings lasted a little longer than facts: 29% of feelings were kept, against 23% of facts. But the feelings lost their detail. In about 7 of 10 cases, the memory kept that a feeling was there, and whether it was good or bad, but it lost what kind of feeling it was or how strong it was. Feelings that a character only showed, such as a slammed door, were lost more often than feelings put into words. Most of the loss happened at the first rewrite. To show what this means for players, we also built a small demo game, The B Gate 3, where a companion rewrites her notes about you after each night at camp. These are early results, and we will check them with human labels next.


# PEAK: Testing Levels with Evolved Players

{% include figure.liquid loading="eager" path="assets/posts/science-day-2026/peak.jpg" class="img-fluid rounded z-depth-1" width="50%" height="50%" %}

## What PEAK is

PEAK is a game-balancing tool for 2D platformers. Small neural networks learn to play a level and then report what happened: how often they win, where they die and why. This way, a level can be tested thousands of times without humans.

PEAK has 5 game engines: Mario, Mega Man, Sonic, Meat Boy and Bomberman.

## Players with different styles

The agents imitate 6 types of players:

| Persona | How it plays |
|---|---|
| Novice | Walks only, reacts slowly |
| Clumsy | Walks only, reacts slowly, often presses the wrong button |
| Experienced | Sprints, reacts every frame, makes no mistakes |
| Speedrunner | Like experienced, but tries to finish fast |
| Killer | Tries to kill every enemy |
| Collector | Tries to pick up every coin |

## The experiment

The newest work asks one question: **if you make one small change to a level, do the agents notice it?**

Each game has 1 test level, and each level has 5 changes:

- **A sealed route:** a wall blocks the way to the exit
- **A harder obstacle:** a wider gap, an extra enemy or a shorter bomb fuse
- **A weaker jump**
- **A hidden change:** a tile that no player can reach
- **A cosmetic change:** the level file is different, but the level plays the same

The agents first learn to play the original level. Then they play each changed version, and PEAK compares the two sets of play.

## The results

- PEAK caught **11 of 12** changes that make the level harder or impossible to finish.
- PEAK correctly ignored **4 of 4** changes that do not affect play.
- The cosmetic changes played exactly the same in all 4 games.
- The one miss was the weaker jump in Meat Boy.

Novice, experienced and speedrunner players noticed the most changes. Clumsy players noticed none, because they could not finish the original levels.

# TokyoEmerald

{% include figure.liquid loading="eager" path="assets/posts/science-day-2026/tokyoemerald.jpg" class="img-fluid rounded z-depth-1" width="50%" height="50%" %}

##### *Can pedestrians in Shinjuku, Tokyo beat Pokemon Emerald?*

<span style="color: gray;"> Given enough time, probably! </span>

TokyoEmerald is a computer vision project I myself worked on during the university's reading week. The concept is simple: track pedestrians from a 24/7 live stream, mapping their real-time location to a virtual surface containing buttons. There are buttons overlayed on the stream that map to actual inputs in the game. The game feed is positioned in the top-lefthand side of the stream. 

As of the time of writing, it has been nearly two weeks since the stream started. We have a level 17 Combusken and we haven't beat the first rival fight. 

More information can be found in the Twitch channel description: [twitch.tv/TokyoEmerald](http://twitch.tv/tokyoemerald). Feel free to walk on by our lab (SCI-2071) to see the stream on display, as well.


