// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Code &amp; Sorcery Lab - Empirical Game Research",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Code &amp; Sorcery Lab - Empirical Game Research  Ongoing work in the lab. If something here interests you, get in touch.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-team",
          title: "team",
          description: "Code &amp; Sorcery Lab - Empirical Game Research",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-research-visit-and-seminar-at-ufmg",
        
          title: "Research visit and seminar at UFMG",
        
        description: "Two weeks at the Department of Computer Science at UFMG in Belo Horizonte, working on LLMs for software development productivity.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/seminar-ufmg/";
          
        },
      },{id: "post-honours-thesis-class-of-2026",
        
          title: "Honours Thesis — Class of 2026",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/honour-thesis-f2025-w2026/";
          
        },
      },{id: "post-invited-lecture-empirical-retro-game-research",
        
          title: "Invited lecture — Empirical (RETRO) Game Research",
        
        description: "A guest lecture on empirical game research for INFR 3375U/CSCI 5550G Retro Game Development, with four case studies on easter eggs, Dragon Quest, Final Fantasy IV, and Pokémon.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/invited-lecture/";
          
        },
      },{id: "post-otuguessr-a-geoguessr-style-campus-exploration-game-for-ontario-tech-university",
        
          title: "OTUGuessr - A GeoGuessr-style campus exploration game for Ontario Tech University",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/otuguessr/";
          
        },
      },{id: "post-code-amp-sorcery-students-at-hackhive-2026",
        
          title: "Code &amp; Sorcery Students at HackHive 2026",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/hackathon-css/";
          
        },
      },{id: "post-call-for-submissions-fase4games-26-fse-2026-montreal-canada",
        
          title: "📢 Call for Submissions - FaSE4Games’26 @ FSE 2026 (Montreal, Canada)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/call-fase4games26/";
          
        },
      },{id: "post-optimizing-2d-physics-spatial-hashing",
        
          title: "Optimizing 2D Physics Spatial Hashing",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/spatial-hashing/";
          
        },
      },{id: "post-research-seminar",
        
          title: "Research Seminar",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/research-seminar26/";
          
        },
      },{id: "post-what-about-indies",
        
          title: "What about Indies?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/press-reset-review-indies/";
          
        },
      },{id: "post-game-development-hacks-in-the-90s",
        
          title: "Game development hacks in the 90s",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/gamedev-90/";
          
        },
      },{id: "post-the-future-of-game-development",
        
          title: "The Future of Game Development",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/press-reset-review-future/";
          
        },
      },{id: "post-12-reasons-why-game-development-is-software-development-or-is-it",
        
          title: "12 Reasons Why Game Development IS Software Development! Or is it?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/press-reset-review-1/";
          
        },
      },{id: "post-greedisgood",
        
          title: "greedisgood",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/wc3-reforged/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-interrogating-generative-npcs",
          title: 'Interrogating generative NPCs',
          description: "Can an LLM-driven character hold up under pressure? Building a framework to find out.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/adversarial-npc-evaluation/";
            },},{id: "projects-one-agent-many-play-styles",
          title: 'One agent, many play styles',
          description: "Getting behavioural variety out of a single playtesting agent instead of training a separate one per style.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/behavioural-coverage-rl/";
            },},{id: "projects-creativity-beyond-functionality",
          title: 'Creativity beyond functionality',
          description: "A large-scale look at hidden content in games: the creative work that serves no functional purpose.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/easter-eggs/";
            },},{id: "projects-what-ecs-design-choices-really-cost",
          title: 'What ECS design choices really cost',
          description: "Several ways to handle collisions in an Entity-Component-System architecture, and the price each one carries.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ecs-collision-tradeoffs/";
            },},{id: "projects-automating-the-move-to-the-gpu",
          title: 'Automating the move to the GPU',
          description: "Generating GPU plumbing for ECS systems automatically, and working out at runtime when the GPU is actually worth it.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ecs-gpu-offload/";
            },},{id: "projects-emotional-memory-in-generative-characters",
          title: 'Emotional memory in generative characters',
          description: "Whether LLM-driven characters remember what mattered to them, and whether that is grounded in psychology.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/emotional-memory-npcs/";
            },},{id: "projects-translating-games-with-small-models",
          title: 'Translating games with small models',
          description: "Whether models small enough to run on an ordinary machine can translate game dialogue, including into low-resource languages.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/game-dialogue-translation/";
            },},{id: "projects-how-games-are-maintained-after-release",
          title: 'How games are maintained after release',
          description: "What developer-written patch notes across a whole storefront reveal about post-release maintenance.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/game-maintenance-patch-notes/";
            },},{id: "projects-legacy-modernization-with-coding-agents",
          title: 'Legacy modernization with coding agents',
          description: "Putting an AI coding agent on a real industrial migration and measuring what it delivers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/legacy-modernization-agents/";
            },},{id: "projects-the-llm-npc-landscape",
          title: 'The LLM-NPC landscape',
          description: "A systematic map of how large language models are being used to drive non-player characters, and where the gaps are.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/llm-npc-landscape/";
            },},{id: "projects-generating-game-assets-end-to-end",
          title: 'Generating game assets end to end',
          description: "How far an automated pipeline can get toward usable text and art for a game character.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/multimodal-asset-generation/";
            },},{id: "projects-open-source-games-as-software",
          title: 'Open-source games as software',
          description: "Characterising open-source video games from a software engineering standpoint.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/open-source-games/";
            },},{id: "projects-peak-authoring-and-training-in-one-loop",
          title: 'PEAK: authoring and training in one loop',
          description: "An open-source 2D platformer engine where you can design a level and train an agent on it without leaving the tool.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/peak-engine/";
            },},{id: "projects-persona-based-playtesting-surveyed",
          title: 'Persona-based playtesting, surveyed',
          description: "Taking stock of persona-driven agents for automated playtesting, and how little the field agrees on.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/persona-playtesting-survey/";
            },},{id: "projects-staying-in-character",
          title: 'Staying in character',
          description: "Keeping a character consistent over a long conversation by working inside the model rather than the prompt.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/persona-stability/";
            },},{id: "projects-transpiling-the-good-old-days",
          title: 'Transpiling the good old days',
          description: "Bringing games written for a long-obsolete BASIC dialect back to life on a modern runtime.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/retro-transpiling/";
            },},{id: "projects-migrating-to-a-typed-language",
          title: 'Migrating to a typed language',
          description: "How JavaScript projects actually move to TypeScript, and whether code quality follows.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/typescript-migration/";
            },},{
        id: 'social-arxiv',
        title: 'arXiv',
        section: 'Socials',
        handler: () => {
          window.open("https://arxiv.org/a/politowski_c_1.html", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/crispolito87.bsky.social", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CCV-CristianoPolitowski.pdf", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/180/3296.html", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%72%69%73%74%69%61%6E%6F.%70%6F%6C%69%74%6F%77%73%6B%69@%6F%6E%74%61%72%69%6F%74%65%63%68%75.%63%61", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/cpoli87", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/cristiano-politowski", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-0206-1056", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=B8qnQe0AAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/crispolito87", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
