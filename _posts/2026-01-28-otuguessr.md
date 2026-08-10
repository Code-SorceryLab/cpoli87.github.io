---
layout: post
title: OTUGuessr - A GeoGuessr-style campus exploration game for Ontario Tech University
date: 2026-01-28
tags: tech
author: adrian
---

# OTUGuessr

_A GeoGuessr-style campus exploration game for Ontario Tech University_

[https://www.otuguessr.com/](https://www.otuguessr.com/)

**Created by:** Adrian Fudge & Vincent Wong

## Introduction

Ontario Tech University has a large and diverse campus with many hidden or lesser-known spots that students may never discover during their time at the school. As students ourselves, we noticed that many people tend to stick to the same few buildings and paths, missing out on some genuinely great areas across campus.

We built **OTUGuessr** to help change that.

OTUGuessr is a GeoGuessr-style web game designed specifically for the Ontario Tech University campus. The goal of the project was to create something fun and interactive that would encourage students to explore their surroundings, improve campus culture, and give both new and long-time students a new way to engage with the university.

This was a personal project between two students, built outside of any course requirements, with the goal of gaining real-world development experience and showcasing our technical skills. After deploying the application, we saw hundreds of users within the first 24 hours, which was incredibly motivating and validated the idea.

## What is OTUGuessr?

OTUGuessr is a browser-based guessing game inspired by GeoGuessr, but fully themed around the Ontario Tech University campus.

Players are shown an image taken somewhere on campus along with an interactive map. They place a pin where they believe the image was taken. Once submitted, their guess is scored based on how close it is to the real location.

After several rounds, players are given a final score and can submit their name to appear on a global leaderboard.

The target audience is students --- from first-years seeing campus for the first time to postgraduates who may still discover places they've never noticed before.

## How the Game Works

1. A random campus image is displayed.
2. The player drops a pin on the map.
3. The guess is submitted.
4. The distance between the guess and the actual location is calculated.
5. A score is awarded based on accuracy and speed.
6. After several rounds, the final score is shown and can be submitted to the leaderboard.

<!-- ## Demo & Media



![Gameplay view](images/gameplay.png)

![Guessing map screen](images/map.png)

![Final score screen](images/score.png)

![Leaderboard](images/leaderboard.png) -->

## Tech Stack

- **Frontend:** React TS
- **Mapping:** Leaflet
- **Backend / Cloud:** Firebase
- **Hosting:** Vercel

## High-Level System Design

Image + Coordinates → User Guess → Distance Calculation → Score Computed → Stored in Firebase → Leaderboard

## Key Challenges & Solutions

### Accurate Distance Calculation

We implemented the **Haversine formula** to calculate the shortest distance between two points on Earth using latitude and longitude.

### Image Performance

Images were resized and compressed before upload to significantly improve load times and responsiveness.

## What We Learned

- Full-stack web development
- React + TypeScript workflows
- Firebase cloud integration
- Deployment and performance optimization

## Future Improvements

- Monthly resetting leaderboards
- Larger curated image pool
- Moderation system for submissions
- Difficulty modes
