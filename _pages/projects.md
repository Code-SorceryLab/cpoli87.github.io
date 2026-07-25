---
layout: page
title: projects
permalink: /projects/
description: Ongoing work in the lab. If something here interests you, get in touch.
nav: true
nav_order: 3
display_categories: [llm npcs, playtesting agents, game software engineering, engines and performance, generative content]
horizontal: false
---

<!-- pages/projects.md -->
<style>
  .venn-fig { margin: 0 auto 2.5rem; }
  .venn {
    display: block; width: 100%; max-width: 620px; height: auto; margin: 0 auto;
    --venn-1: #2a78d6; --venn-2: #eb6834; --venn-3: #1baf7a;
    --venn-lobe: 0.15; --venn-core: 0.10;
  }
  html[data-theme="dark"] .venn {
    --venn-1: #3987e5; --venn-2: #d95926; --venn-3: #199e70;
    --venn-lobe: 0.26; --venn-core: 0.16;
  }
  @media (prefers-color-scheme: dark) {
    html:not([data-theme="light"]) .venn {
      --venn-1: #3987e5; --venn-2: #d95926; --venn-3: #199e70;
      --venn-lobe: 0.26; --venn-core: 0.16;
    }
  }
  .venn .lobe { fill-opacity: var(--venn-lobe); stroke: none; }
  .venn .ring { fill: none; stroke-width: 3; }
  .venn .lobe.s1 { fill: var(--venn-1); }
  .venn .lobe.s2 { fill: var(--venn-2); }
  .venn .lobe.s3 { fill: var(--venn-3); }
  .venn .ring.s1 { stroke: var(--venn-1); }
  .venn .ring.s2 { stroke: var(--venn-2); }
  .venn .ring.s3 { stroke: var(--venn-3); }
  .venn .core { fill: var(--global-text-color); fill-opacity: var(--venn-core); }
  .venn text { font-family: inherit; fill: var(--global-text-color); }
  .venn .lbl { font-size: 17px; font-weight: 600; }
  .venn .core-lbl { font-size: 13.5px; font-weight: 700; }
  .venn .core-sub { font-size: 12.5px; }
</style>
<figure class="venn-fig">
  <svg class="venn" viewBox="0 0 620 570" role="img" aria-labelledby="venn-title venn-desc">
    <title id="venn-title">Game development, software engineering, and artificial intelligence as three overlapping fields</title>
    <desc id="venn-desc">A Venn diagram of three equally sized overlapping circles labelled game development, software engineering, and artificial intelligence. The central region where all three overlap is shaded and labelled "most projects sit here".</desc>
    <defs>
      <clipPath id="venn-clip-a"><circle cx="310" cy="200" r="150" /></clipPath>
      <clipPath id="venn-clip-ab" clip-path="url(#venn-clip-a)"><circle cx="223.4" cy="350" r="150" /></clipPath>
      <clipPath id="venn-clip-abc" clip-path="url(#venn-clip-ab)"><circle cx="396.6" cy="350" r="150" /></clipPath>
    </defs>
    <circle class="lobe s1" cx="310" cy="200" r="150" />
    <circle class="lobe s2" cx="223.4" cy="350" r="150" />
    <circle class="lobe s3" cx="396.6" cy="350" r="150" />
    <rect class="core" x="0" y="0" width="620" height="570" clip-path="url(#venn-clip-abc)" />
    <circle class="ring s1" cx="310" cy="200" r="150" />
    <circle class="ring s2" cx="223.4" cy="350" r="150" />
    <circle class="ring s3" cx="396.6" cy="350" r="150" />
    <text class="lbl" x="310" y="128" text-anchor="middle">game</text>
    <text class="lbl" x="310" y="150" text-anchor="middle">development</text>
    <text class="lbl" x="175" y="398" text-anchor="middle">software</text>
    <text class="lbl" x="175" y="420" text-anchor="middle">engineering</text>
    <text class="lbl" x="445" y="398" text-anchor="middle">artificial</text>
    <text class="lbl" x="445" y="420" text-anchor="middle">intelligence</text>
    <text class="core-lbl" x="310" y="296" text-anchor="middle">most projects</text>
    <text class="core-sub" x="310" y="314" text-anchor="middle">sit here</text>
  </svg>
  <figcaption class="caption">The lab works where game development, software engineering, and artificial intelligence meet. Most of the projects below sit in that middle region.</figcaption>
</figure>
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
