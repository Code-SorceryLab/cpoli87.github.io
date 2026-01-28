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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-team",
          title: "team",
          description: "Code &amp; Sorcery Lab - Empirical Game Research",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
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
      },{id: "post-optimizing-2d-physics-spatial-hashing",
        
          title: "Optimizing 2D Physics Spatial Hashing",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/spatial-hashing/";
          
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
            },},{id: "news-research-seminar",
          title: 'Research Seminar',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/research-seminar26/";
            },},{id: "news-call-for-submissions-fase4games-26-fse-2026-montreal-canada",
          title: '📢 Call for Submissions - FaSE4Games’26 @ FSE 2026 (Montreal, Canada)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/call-fase4games26/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
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
          window.open("crispolito87", "_blank");
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
