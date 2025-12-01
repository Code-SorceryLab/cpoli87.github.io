---
layout: post
title: '12 Reasons Why Game Development IS Software Development! Or is it?'
date: 2021-08-04 11:19:40
author: cristiano
tags: book
---

**Book Review: Press Reset: Ruin and Recovery in the Video Game Industry by Jason Schreier**

<!-- ![Press Reset: Ruin and Recovery in the Video Game Industry](https://images-na.ssl-images-amazon.com/images/I/513s30+Ic5L._SX326_BO1,204,203,200_.jpg) -->

Jason Schreier is a journalist that covers the world of video game software development. In his second book, "Press Reset: ruin and recovery in the video game industry" he explores real cases where studios were closed (and reopened... and closed again) while the developers were lost in the middle, struggling to keep a stable job.

In this article I'd like to show some of the quotes from the book (which are interesting per se) and some comments from my part. Always trying to compare with traditional software engineering. 

### #1. Users want something new, better, and bigger each new [AAA game](https://en.wikipedia.org/wiki/AAA_(video_game_industry)) 
> As the graphics got better, players’ standards grew higher. Even games like BioShock Infinite, which aimed for stylized, colorful graphics rather than ultrarealistic grit, were expected to look richer and more beautiful than any game before them. To create those vibrant worlds, teams of twenty had grown to teams of two hundred. What had been just a task on an artist’s checklist might now be one person’s entire job.

This is the same for traditional software as well. The scope and complexity grows bigger over the years for both industries. Nowadays, to build a simple web app, you must have a wide range of knowledge. Front end and back end, web servers, servers, devops, testing, analytics, and so on. The frameworks help a lot hiding the complexity and put something live quickly. Yet, at some point, you must dive more deep into the architecture as the app grows bigger.

In game development this also happens. Specially in 3D modeling, where the artist needs to craft the model. You can still build [retro style games](https://en.wikipedia.org/wiki/Retrogaming) and be successful, like many [indie](https://en.wikipedia.org/wiki/Indie_game) developers do. However, as the quote says, users will always want something better and bigger.

### #2. Reality of game industry
> (...) the reality of the games business is, there  re four endgames: You go public, which  obody does. You survive for decades like  alve. You get acquired. Or you go out of business.

This is from an interviewee. He was pissed with something, but still, I don't quite get it. First, big studios go public. Valve shifted their focus, although they still make games. Get acquired or go out of business is... just like real life. I didn't get the point here.

### #3. You don’t release what you don’t want to
> "'release it', Gardner said. Now, in 2007, they’d gone from a video game so bad they didn’t want to sell it to one of the most celebrated"

This is a case where the game was a sequel and went through a ["development hell"](https://en.wikipedia.org/wiki/Development_hell). After a successful game, the studio (which was part of a big [publisher](https://en.wikipedia.org/wiki/Video_game_publisher)) tried a sequel, but the team had changed a lot since then. After years of development, the result wasn't good enough even to be released. In general, it is better to not release to avoid any bad PR for the studio. Yes, all the effort and money were wasted.

This happens often in game development. I believe we can make a parallel with new startup ideas. But in those cases, it is better to release the product and see if there is any traction. With games you have one shot, so you better hit it. 

### #4. In-house tools
> "Once a developer has put in the time to learn those tools, they’ll be more efficient than new recruits. Plus, the chemistry developed over years of working together can be invaluable, as anyone who’s worked on a collaborative creative project (or a group science experiment) can attest."

Game industry has a high turnover rate of professionals. It is the main topic of the whole book. Here the author states that, for creative projects (like video games) it takes time to get used to in-house tools.

Big studios (AAA or triple-A) have in-house tools like game engines and other support softwares. Also the production pipeline, flow of the team, specific rules of the studio, etc. It takes time for a new arrival to get used to these things. This is also true for traditional development. For example, understand an in-house web-framework is not an easy task. Yet, in general, it seems that in traditional software development, developers more about the standards and documentation, and testing for that matter. 

### #5. Project Management
> "be roughly divided into two phases, both borrowed from the film world: preproduction and production. Definitions There’s a school of thought among many game developers that on a new video game, the preproduction process should take a very long time. After all, the belief goes, creativity needs to be nurtured, and great art comes from iteration."

<!-- #### The problem with estimation -->
> (...) games straddle the line between art and science, where technological advancements and the challenge of “finding the fun” can make it near-impossible to build accurate schedules.

The main feature of a game is to be fun. No fun, no sales, no money. Therefore, most game developers spend long time "playing around" with prototypes and testing until they decide the game's core mechanic is good enough. This phase is called "pre-production" and it is borrowed from cinema industry.
After that, they go into "full production" to actually build the game and ship. This is where the crunch happens.

Fun is not a requirement for traditional software (or productivity software). Usually developers have a somewhat clear vision of the features (functional requirements) they must implement. 
So, how to make any estimation in game development when, by nature, the product has ill-defined and moving goals?

<!-- #### Can AAA games be shipped on time and budget? -->
> question: Can you name one game that has shipped on time and on budget that anybody cares about?”

This phrase is from an interviewee. If I show this to any software engineer they will pale. However, after thinking a bit, this guy might be right. I read hundreds of postmortems of video games. Plus, all the media coverage of games. I never heard a developer saying: "we delivered the game on time". On the contrary, when they do deliver on time, the game is often no ready, not polished enough. Just look at the No Man's Sky and Cyberpunk.

<!-- #### Pre-prod & Production (creativity freedom) -->


### #6. Publisher vs. Dev. Team
> The conflict between game developers trying to make art and game publishers trying to make a profit is as old as video games themselves. It’s the root cause of most of the game industry’s problems. 

Many of the problems in the game industry arise from the relationship (or lack thereof) between the upper management, the Publisher, the ones who pay the bills; and the development team. Often, the freedom of the designers is damaged by influence of external stakeholders. Feature-creep is one common result from this scenario. On the other hand, there are cases where the excess of freedom caused games to be canceled or even the studio to be closed.

Similar thing also happens in traditional software development. For example, new features being prioritized over the essential ones (yes, I'm talking testing and refactoring).

<!-- ### One project at a time
> "Your average game company, even big publishers like 2K, they can’t necessarily focus on the long-term—focus on the game after next—because a lot of what they’re able to do depends on the success of the current game they’re working on"

... -->

### #7. How to fund the next project
> The number of copies I want to sell is N+1, where N is the number of copies I must sell to make my next game.

This is from a developer. A lead game designer. I found this quote very humble. Clearly he is doing that just because he loves it. Not for money or status. It is against all rules of business. Also, it seems that most of the greed comes from publisher, managers, and non-developers stakeholders.

### #8. Traditional Software VS Game Industry (money wise)
> “A person doing a similar job outside of the games industry is going to be paid more,” Reyna said. “Going back to being that came with a pay bump and benefits. “I was making $12 an hour during my time [at Irrational],” Lease said. “Now I’m working in educational software making $31 an hour.”

Oof. What a difference. Irrational was a big studio. Even though, $31 compared to $12... It says it all. This is, of course, in the US market. A quick check in the [Linkedin](https://www.linkedin.com/salary) shows similar trends. I wonder if it is the same in other parts of the world.

### #9. Cost of running a Game Studio
>[the cost of the game studio] hovered around $16,000 a person per month, a number that included salary and other expenses. At that estimate, a staff of one hundred people would cost more than $19 million a year.

Not cheap at all. If you consider that you need at least 3 years for any (polished) AAA game, you understand that this is, indeed, a risk business. 

Software industry understood this right and, at least nowadays, frequently uses outsourcing. Specially from countries with a weak currency, for example. Can game studios do the same? Will it work for creativity tasks? I believe the pre-production phase is not quite suitable for that. The experimental nature and the constant flow of ideas needs a different approach. But, for the production phase it looks suitable. Creating the assets like 3D models, music, sound effects, etc. Every part that can be easily parallelized is candidate for outsourcing. Yet, the developers will face different challenges. Specially because communication among and problems among the team are common problems.


### #10. Game Testers are not Engineers nor Designers
> Even today, at many large video game companies in the United States, QA testers make close to minimum wage and are treated like a lower caste, often given fewer benefits and told not to speak to other developers.

Testing is crucial for any game or software. The first thing we do after coding some feature is to verify if it works. Unit, End-to-end, stress testing... not matter which type (or coverage) of testing you do, it will be a proxy for the product's quality.

In game development what reigns is gameplay testing. Basically a manual task done by game testers specialized in spotting inconsistencies in the game. There are many problems with this approach, for example:

1. It is not scalable. The human endurance and perception can cover so much.
2. It is slow. The tester needs to play the game like he's an user/player.
3. It needs something to play. The tester will play a more mature version of the game later in development stage.
4. Hard to replicate the problem. The tester found a bug! Good luck explaining that to a developer.

On the other hand, developers in software development are (usually) also the testers. The gap between game industry and software industry, in the testing field, is the size of my mom's love for Mate (a tea), that is, HUGE. There are few studies about game testing in academia and even fewer studies in the game development domain. This is the topic of my thesis and I will write more about it soon.

### #10. Big companies cancel many games we don’t even know
> “Fun fact,” said Ian Frazier. “Fortnite was nearly canceled three times during the limited window of time I worked for Epic.”

<!-- ![turntables-meme](/images/turntables-meme.jpeg) -->

Fortnite is (this statement might become obsolete very soon) a huge success and one of the most played games nowadays. @drfabiopetrillo has a nice presentation about its development and how Epic conducted the development of Fortnite. You should ask him about it :D.

### #12. Crunch time

#### Crunch, crunch, crunch
> By 2007, Levine had told the BioShock development team that seven-day workweeks were mandatory. “We basically added a lot of time to our schedule without actually having time in our schedule,”

Crunch-time is the period when game developers work overtime for a long period of time. From mandatory not paid, to optional paid. It varies depending of studio. This is a well known practice in game industry. It is also present in traditional software development environment, but in a lesser degree.

Schereier is famous for writing about crunch-time. Surprisingly, not as much in this book. Still, there are some cases, like this one from [Kevin Levine](https://en.wikipedia.org/wiki/Ken_Levine_(game_developer)). There is not much to say here aside of popular "crunch bad". Of course, it is more complicated than this. The "culture of crunch" is present and the will stay for a while. For example, even if the studio does not force crunch time, the peer pressure still persists. 

#### Workaholic crunching (peer pressure)
>“It was: focus, focus, focus, then go to the  ospital,” LaClair said. “Suddenly I look up  nd there are fifty-plus people that I didn’t  ven know anymore.” After some pondering,  ven having to ask. “If you’re a really smart  xecutive, you just hire people that are  ired that way and put them in high-up  ositions,” said Mumbach. “Then you don’t  ave to demand that people work overtime.  ou can just turn a blind eye to it.”

This quote really scared me. The person was so passionate and focused on his/her work that lost the perception of reality. New colleagues were coming and going and while he/she got sick for working too much. Is it healthy? Should we work in what we like no matter the consequences? 

The second part of the quote is something that hit me hard. The peer pressure to work more is cultural. For example, you would feel bad seeing your colleagues working so hard while you just finished your 9 to 5 job and go home. More so, you're working for someone else, not for yourself. How to deal with this? How to find balance in life and work? I heard similar things from traditional software industry, but in a less degree.

#### Crunch for you VS. crunch for others
> “We did crunch very hard, and it sucked, don’t get me wrong, but it’s a huge difference crunching for a game that you know you have revenue share in,”

> “I had such a clear ownership over what I was doing,” she said. “When you have that ownership, the crunch doesn’t sting as much.”

On thing is to work hard for someone else. Another is for yourself. We note that in this testimony from an independent developer. Apparently, working 16 hours in pursue of your dream is not that bad. Or is it?


---

_About me: I'm a Ph.D. student in Software Engineering studying the video-game industry. Please, take a look a [some of my publications](/publications)._ 

