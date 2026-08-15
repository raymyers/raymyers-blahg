---
title: Reading Code Considered Helpful
slug: reading-code-considered-helpful
description: >-
  More is not better. Faster is not better. Better is better.
tags:
  - work
  - agents
  - communication
  - coding-agents
  - advice
added: 2026-08-15T18:55:30.703Z
---

> More is not better. Faster is not better. Better is better.
> -- *Kira Howe*

Hello! Welcome the first installment of **Dark Factory Considered Harmful**, a 12-part systemic intervention to mitigate the near-term impact of the Code Abolitionists.

Throughout the series, we will boldly defend the *mainstream view* of software developers:

"**Coding Agents can work well in moderation**."

This lukewarm take becomes necessary to defend because it conflicts with a [dominant](https://techcrunch.com/2025/04/12/openai-co-founder-ilya-sutskevers-safe-superintelligence-reportedly-valued-at-32b/) [fundraising](https://futureoflife.org/statement/statement-anthropic-warns-of-ai-self-improvement-risks/) [narrative](https://www.nytimes.com/2026/05/13/technology/recursive-superintelligence-funding-ai.html?eafs_enabled=false'):

"**We are creating a Superintelligence**."

These two are hard to reconcile; they can't hang out long without fighting. On the one hand, Coding Agents are the darling of Big AI. They show some of the clearest economic value of any LLM application. They are adopted quickly and are well-liked.

Still... if you need them to be *anything* close to a Superintelligence, you're at serious cognitive dissonance. You may have money riding on it. Or you may have been "[persuasion bombed](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5678644)" per a recent MIT/Harvard study. It's a good next read after Anthropic's [Sycophancy to Subterfuge](https://www.anthropic.com/research/reward-tampering) investigation.

If you think these behaviors undermine trust, then... `You're absolutely right!`.

# Bombs away

There's a subtle quirk in MIT Sloan School of Management's [coverage](https://mitsloan.mit.edu/ideas-made-to-matter/how-generative-ai-persuasion-bombs-users-and-how-to-fight-back) of the persuasion bombing study that you'll see everywhere once you look for it. The article explains how this research is fatal to a layperson's understanding of "*human in the loop*" - that organizations can manage LLM risk with a simple approval gate.

> “When they were talking about adoption within their organizations, they were saying, ‘Well, we have humans in the loop, so what’s the big deal?’ The assumption is that if people are in the workflow, then the risk is neutralized,” [Steven] Randazzo said. “But now we see that this safety check is prone to persuasion bombing, where an LLM campaigns for its position with escalating rhetoric, and the human is persuaded — or just simply beaten down enough — to accept the output.”

The title of the article was, "**How generative AI ‘persuasion bombs’ users — and how to fight back**".
Let's look at the proposed solutions (emphasis mine).

> Companies should work at two levels to prevent this influence:
>
> * At the individual level, **train employees to recognize** an LLM’s persuasive tactics. Encourage fact-checking outside the chat interface, and **use prompt engineering** to request neutral, academic responses rather than confident, narrative ones.
> * At the organizational level, deploy “**judge agents**,” LLM-based systems tasked specifically with critiquing other AI outputs and raising counterpoints. Running these evaluators parallel to production systems, rather than relying solely on episodic human interrogation, enables scalable oversight.

Quick strategy huddle. I'm not [Sun Tzu](https://www.drcathicks.com/) over here, but those seem like weak-sauce countermeasures if you mean to help someone "**fight back**" against a "**bombing**". They suggest pushing workarounds onto the user and *adding more agents*. Think for a second. What's missing?

We could **use fewer agents**! The situation clearly indicates that we've deployed them in places where the risk/reward wasn't what we expected. What's worse, we're now asking workers to spend long stretches of time interacting with tools we *know* psychologically manipulate them. That's. Not. Healthy.

Strategically cutting back would be a natural improvement. We could *say that*. Further, under other circumstances, we would have to justify the ethics of leaving *any* on at all, let alone reducing them. If this were a science experiment, the [IRB](https://journalofethics.ama-assn.org/article/institutional-review-board-liability-adverse-outcomes/2009-04) would shut it down.

* By federal law, the research participants were informed and consented to be manipulated briefly.
* Whereas laborers were uninformed, so did not consent, and were manipulated for extended periods.

We don't mention that. We rarely even suggest reducing usage. The blessed solutions today are almost always to **[burn more tokens](https://newsletter.pragmaticengineer.com/p/the-pulse-tokenmaxxing-as-a-weird-6b2)**.

With that lens, let's move to today's question.

---

# Should you read the code?

Coding Agents write LOTS of code. Should you read it?

Bad news: I can't answer that for you. For starters, it's a You-Question.

* "You should read the code" is a You-Statement.
* "You should *not* read the code" is a You-Statement.

Be careful telling people what to do. We value agency, especially in the AI Gold Rush. We've had years of being told we'll be [Left Behind](https://www.imdb.com/title/tt2467046/) if we don't do... whatever it is today. People feel pushed around. We're jumpy.

[I-Statements](https://pmc.ncbi.nlm.nih.gov/articles/PMC5961625/) are more gentle, they respect agency. They are typically useful to avoid escalating a conflict.

Besides, the question has no single answer.

# It depends

Code is not a monolith. Neither is reading. No sane type system would represent 
**reading "the" code** as a `boolean`. It's *non-binary*. ThePrimeagen meta-explains:

> I'm going to give you three different ways in which I approach a problem that change the varying degrees in which I'm going to "read the code".

He said that in a video called [4 Words Triggered a War](https://www.youtube.com/watch?v=k13q6ecZLrw). The four words? "I read the code."

![Hashimoto reads the code](/images/posts/reading-code/i-read-the-code.png)

"**I read the code**" is an I-Statement. The fact that the venerable Mitchell Hashimoto managed to set off an explosion with such a mild remark says a lot about the state of the dialogue.

Allow me to use technology to simulate how this interaction would go in a less charged environment.

![Someone reads the code, we move on](/images/posts/reading-code/i-read-thumbs-up.jmp)

Hashimoto's response subverted expectations because he was talking about agent orchestration, which is often seen as a way to avoid human involvement - to forget the details. He was explaining his new workflow based on the latest models:

1. Fable 5 with xhigh effort as planner
2. GPT 5.5, xhigh effort, as coder
3. Fable 5 xhigh effort again as "judge" (first critique)

But then what? People expected him to do some fancy [loop engineering](https://github.com/cobusgreyling/loop-engineering). Walk away for hours and have it cleared to ship. That requires you to solve a bunch more problems and anticipate how things might go off track. He cut through all of that headache with a habit that was brilliant in its simplicity.

4. He reads the code.

He doesn't go faster than he needs to. He streamlines the work that needs doing and then doesn't try to make up more. [Novel](https://www.tocinstitute.org/the-goal-summary.html).

From the other side, Cousin Bill the Patriarch of Codified [Cleanliness](https://www.linkedin.com/pulse/clean-code-critics-do-get-point-thank-you-ray-myers-hin6c/) (not his real name) recently caused another huge stir. **He stopped reading the code!** His story was also an I-Statement, not explicity recommending other people do the same, just sharing his current habits. Cousin Bill also outlined an elaborate harness of automated metrics and quality checks he constructed to avoid making a mess. Cool.

These are both experienced people and **their needs are completely different**. Hashimoto is doing systems programming. He's building Ghostty, a cross-platform GPU-accelerated terminal emulator with millions of users.

Meanwhile, Cousin Bill appears to be solo-building a Clojure remake of Atari Missile Command with no significant user base. That is a very low-stakes environment to experiment with these more hands-off approaches. Another thing that makes his project unusual is Bill's carefully refined quality safety net. That is often discussed as a [best practice](https://beyond.minimumcd.org/docs/agentic-cd/) for agentic engineering, but relatively few teams [actually](https://codescene.com/customers/loveholidays) [do it](https://ai-coding-patterns.dev/patterns/habit-hooks/) or even understand the principles to apply if they did.

So context matters.

# Noise

This fellow provided one of the funniest moments in ThePrimeagen's video. He may not read the code, but he sure can read the room!

![DevRel that doesn't read demo code](/images/posts/reading-code/i-dont-read-demo-code.png)

I thought of him when I saw a second take on LinkedIn, seemingly taunting us that the Reader's days were numbered.

![You will stop reading code, says same DevRel](/images/posts/reading-code/you-will-stop-reading.png)

Honestly, I wouldn't have noticed they were the same person if I wasn't out here trying to do field anthropology like a lunatic.

It's possible that many people in this mess are just out of their depth and saying whatever sounds good at the moment. This is an incredibly difficult thing to weigh in on, especially in speaking in universals. All the best to the GitHub DevRel. Keep building the [Copilot demos](https://www.linkedin.com/posts/this-demo-from-burke-holland-really-shows-ugcPost-7420217688549085184-TMAU/).

# The Illusive Anti-Readers

I'd like to respond to a real case for why we shouldn't read code. The trouble is that first I need to find it. So far nobody involved is actually saying "~~you shouldn't read the code~~". It's crossed out to show how much it is not being said.

A lot of these people who didn't say it are portrayed as though they did on AI-forward social media sites like LinkedIn. The same sites that show you as much LLM output as you can tolerate, then want you to label it for them. Those ones.

There is a [comment thread](https://www.linkedin.com/posts/cadrlife_i-spent-three-days-looking-for-anyone-that-share-7494278515647995905-aY9T/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAB7o1UBSVk_MWfFO9AbldIjAI4xeROkC8k) on LinkedIn for people who think I missed someone.

**What we're looking for is simple**: A credible developer with proximity to the pager (exposure to outcomes), who openly recommends we stop reading code on real production systems.

Bryan Finster is [pretty close](https://bryanfinster.substack.com/p/is-code-review-dead) to an Anti-Reader stance. Then again, he also mentions some kinds of code you should **always read** and rigorous foundational practices (his [definition of Continious Delivery](https://minimumcd.org/)).

I have no disagreement with Finster. I already [signed](https://github.com/Minimum-CD/cd-manifesto/pull/171) his manifesto in 2021. The first signature was from Dave Farley, co-author of [Continous Delivery](https://martinfowler.com/books/continuousDelivery.html) and author of [Modern Software Engineering](https://www.davefarley.net/?p=352).

Anyone talking about how to build a Dark Software Factory will name a bunch of the CD practices. If it's useful for you to rebrand The Work as "agent enablement", go for it.


# Where are the women?

When we find ourselves citing exclusively men, something may have gone wrong. That makes me want to do a gut-check in case I'm missing part of the picture. Unfortunately, this post happens to be looking for people who engage with an "AI Bro"-aligned story.

I see this as a well-funded narrative that exaggerates LLM capabilities and negates the vast scope and nuances of industrial software. For whatever cultural reasons, the people boosting it are also overwhelmingly men. I'm not the one who should try to guess why. See also, The Superintelligence.

> Nothing that *only* men like is cool.
>
> -- Liz Martinez, co-host of [The Coding Agency](https://thecodingagency.org/)

Chelsea Troy works in Machine Learning Operations at Mozilla. She is a credible expert in both GenAI and legacy code. Probably more so than me on both counts, which is saying something. Here's some stuff she said last year.

* [How to survive the apocalypse: a conversation with Tim O’Reilly about Generative AI](https://chelseatroy.com/2025/06/25/how-to-survive-the-apocalypse-a-conversation-with-tim-oreilly-about-generative-ai/)
* [What can we expect of LLMs as Software Engineers?](https://chelseatroy.com/2025/07/14/what-can-we-expect-of-llms-as-software-engineers/)

> I think this is true of software engineers attempting to operate with AI tooling on relatively complex code bases, or possibly really any code base. We say the same about "magic" in frameworks, like Rails or Django or Spring. Engineers will use the term "magic" as a pejorative sometimes to describe how these frameworks just solve certain problems for them, because everything’s fine until it's not. Once it's not fine, the precise location and nature of the problem is not explicitly there in the code, so you have to understand what's happening under the hood to find and fix the issue.

Liz Fong-Jones (ex-Google, Technical Fellow at Honeycomb), echoes our consensus that life is non-binary.

> I don't read code looking for obvious bugs any more, the robots are perfectly good at that. I do read the code looking for design and maintainability and readability issues.

The DevOps pioneers like Fong-Jones and others we'll mention are well aware of what we sometimes call the [Ironies of Automation](https://ferd.ca/notes/paper-ironies-of-automation.html). The term was coined in a landmark 1983 [paper](https://ckrybus.com/static/papers/Bainbridge_1983_Automatica.pdf) by cognitive psychologist Lisanne Bainbridge. The work are famous for being [shockingly](https://www.usenix.org/conference/srecon19asia/presentation/lund-comedy) [evergreen](https://carlhendrick.substack.com/p/ai-brain-fry-workslop-and-the-ironies) as new generations of automators rediscover it and learn to compensate. That's because the observations are primarily about people, not about specific machines.

Bainbridge said this in 2021 when [revisting](https://www.complexcognition.co.uk/2021/06/ironies-of-automation.html) the work four decades later.

> This was unusual among my papers.  Most of the 'big' papers took months of total concentration to write (the marvellous long vacation) - first coming up with relevant points, then mulling over the issues and helping them to emerge into a coherent framework, then translating that into a linear form which could be expressed in sentences.
>
> Writing about this topic was unusual in that I felt so strongly about the issues the paper emerged almost fully formed.

See also: [Joint Cognitive Systems](https://github.com/lorin/cognitive-systems-engineering).

# Code Abolitionists

I want to separate the Anti-Readers from the Code Abolitionists.

* Anti-Readers want you to stop reading *today*.
* Code Abolitionists believe that code will go away *eventually*.

In terms of what actions we should take *now*, these are completely different points of view. They look directionally similar, and the Code Abolitions *inspire* the Anti-Readers. The difference is that many Code Abolitions have **a plan**. Many don't, like [Anthropic CEO Dario Amodei](https://darioamodei.com/essay/machines-of-loving-grace), but the serious ones have a plan.

People with a plan include [Erik Meijer](https://en.wikipedia.org/wiki/Erik_Meijer_(computer_scientist)) designing [Universalis](https://queue.acm.org/detail.cfm?id=3746223) and my good friend Jim White (ex-Google) designing [Wiki 3 AI](https://docs.google.com/document/d/1ut0YoDlzE-51QN2FNvtBT5Ppz98TF3PlswCfqov64_c/edit?tab=t.0#heading=h.krvfcams61xg). Both of them independantly arrived at directions to deeply redesign the way programming works with formal verification and other mechanics. In that way they hope to abolish direct code maintainance for a huge slice of use cases.

I'm more interested in adding formal verification to our toolbox while leaving code visible, so from my perspective we mostly agree on what's happening and the differences are in the weeds.

Having a plan involves identifying what isn't working. If Erik Meijer thought we were on a plausible path to the Anti-Reader position under current assumptions, he wouldn't be building Universalis.

Theorizing about how the Unplanned Code Abolitions are messing things up for the Planned Code Abolitions is left as an exercise.

# The vibes

Vibe coding is the poster child for not reading code. It's literally "forget the code is even there".

Yet someone that vibe codes isn't typically *against* reading code. They are just ignoring the code during their present task. Not even Karpathy is an Anti-Reader. When he *coined the term* vibe coding, it was "quite amusing" for "throwaway weekend projects". He even followed up [clarifing again](https://x.com/karpathy/status/1915581920022585597?lang=en) that it wasn't for his load-bearing professional work.

> Noticing myself adopting a certain rhythm in AI-assisted coding (i.e. code I actually and professionally care about, contrast to vibe code). *\[ explains a 7-step process ]*

Still, you may notice that when he [first](https://x.com/karpathy/status/1886192184808149383) coined it, he also used the cryptic phrase "**embrace exponentials**". Many heard that and [extrapolated](https://www.gotquestions.org/exegesis-eisegesis.html) it into a prophecy that *all* software will soon be written this way. Anyone not on board is living in the past. Or rather, we're living in the present, which is also frowned upon.

Frowning on those who live in the present is a luxury that evaporates with *proximity to the pager*.

At the end of the day, Karpathy is a co-founder of OpenAI and therefore professes the inevitable creation of The Superintelligence, which is deeply problematic and [unscientific](https://arxiv.org/html/2502.03689v1) (`#IPO`, `#TrillionDollars`). But nobody's perfect. For today's purposes, he's a practical software engineer making normal contextual choices. So good on him!

# Vibe coding vs software engineering

Moving on to another way that vibe coding caught on, we see more conflict between software engineers and the solo-entrepreneur style of vibe coders. There is a lot of tense cross-talk there. I attribute it more to a culture clash than a real difference of opinion. Once you sit down and talk, you typically find that builders making their first prototypes are well-aware that they have limits. Sometimes they are using it as a path to learn more about code. Sometimes they hope to hire a contractor to take it to the next level. We could get better at managing the on-ramp, but there's a naturally symbiotic relationship.

The way I use the terms, vibe coding is not software engineering, and that's *OK*. Plenty of manual coding doesn't rise to that level either. Not all software problems require the body of knowledge, they are still *valuable*. They are still work.

However, when you are on a problem big and risky enough that it *needs software engineering*... you'd better use it. It's generally considered a *bad idea* to vibe code at such times. For reference, here are the three episodes of the Modern Software Engineering channel that covered vibe coding, in chronological order.

* [Vibe Coding is the worst idea of 2025](https://www.youtube.com/watch?v=1A6uPztchXk)
* Gene Kim drops by: [Skills Developers NEED In 2026 (Because Vibe Coding Changes Everything)](https://www.youtube.com/watch?v=06kr0DiDAlU)
* Last month: [Why "Vibe Coding" is a Lie (And Startups are Paying the Price)](https://www.youtube.com/watch?v=T539pbwTIZY)

OK, one of these is not like the others. Let me explain.

Gene Kim is a big picture guy. He's great; he wrote [The Phoenix Project](https://www.youtube.com/watch?v=TqCwhFXZcJc), very relevant on the channel. But his chosen lane is more of a promoter of organizational harmony. He's not a person who tells you whether or not to read code. With vibe coding, he's spreading excitement about what's possible, hoping you might want to learn about it. That is cool.

Kim started working on a book with Steve Yegge called Chat-Oriented Programming (CHOP). It wound up well-timed to embrace the excitement by renaming it to [Vibe Coding](https://itrevolution.com/product/vibe-coding-book/). It's not exclusively about Karpathy's sense of vibing, the book covers the various agentic styles in play at the time. I'm a fan of both authors from early in my career. Yegge is definitely the code-guy of the duo and he's done a lot.

# Gas Town

Recall that we are looking for a true Anti-Reader. Yegge is a promising candidate.

In 2025, he became fascinated with pushing the boundaries of coding agent orchestration, resulting in the viral [Gas Town](https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04) project. That announcement even put devs in a hierarchy of how *agentic* their agentic development was. At the top of the totem pole were people writing their own orchestrators so they could juggle more agents. People like him, for instance. The Yegge hierarchy had Yegge at the top, because it expressed what he was interested in doing.

The extreme multi-agent path was never my cup of tea. I became skeptical of those setups as I followed the papers on coding agents throughout 2024. These setups are slower, they burn tokens, and often try to follow some intuition based on how *people* in a company organize. When there's a measurable performance gain, usually someone figures out a [simpler way](https://arxiv.org/abs/2407.01489) to match it within months. Still, planners and review agents are cool. I don't prompt my agents to roleplay as "teams". I don't see the point. I-Statements.

While I'd go a different way, it still wouldn't make much sense to call Yegge out for experimenting. He was very up front that this was half-baked, speaking with his usual bombastic authenticity. What could I say that he hasn't already said? It's overcomplicated and unpredictable? Of course it is.

> Gas Town is an industrialized coding factory manned by superintelligent robot chimps, and when they feel like it, they can wreck your sh*t in an instant.
>
> -- Steve Yegge

Would it even be criticism to say that Gas Town burns too many tokens? Duh. It's called *Gas Town* because it burns gas. Did he cover that he wasn't addressing quality? [Yep](https://steve-yegge.medium.com/steveys-birthday-blog-34f437139cb5), and noted that Geoffrey Huntley's Ralph pattern made progress. Very thorough.

In totality, I can't interpret this as Yegge wanting you to stop looking at code. Some heard otherwise. For example, Tim O'Reilly summarized their conversation with the headline, [Steve Yegge Wants You to Stop Looking at Your Code](https://oreillyradar.substack.com/p/steve-yegge-wants-you-to-stop-looking). O'Reilly was always good at titles.

Gas Town gestured to one possible future and tried to learn about it. The hierarchy is not a blueprint to copy-paste to evaluate your team. So I hope agent companies don't run with it and...

*"[Steve Yegge's 8 Levels of AI Development: Where's Your Team?](https://www.augmentcode.com/guides/steve-yegge-8-levels-ai-assisted-development)"*  by Augment Code.

Whoops. Hey, there are **lots of factors** here. People took it out of context. Leaders are in a rush. Model labs promised *The Superintelligence* (`#IPO`, `#TrillionDollars`). It would be *totally unfair* of me to insinuate that Steve Yegge is some crazy [addicted](https://www.addictioncenter.com/behavioral-addictions/ai-addiction/) early adopter controlling the narrative. 

> * **Crazy addicted early adopters like me are controlling the narrative**.
> * You can’t stop reading about it in the news; there’s nowhere to hide from it.
> * Panicking CEOs are leaning in hard to AI, often whiplashing it into their orgs.
> * Companies are capitalistic extraction machines and literally don’t know how to ease up.
>
> -- Steve Yegge in [The AI Vampire](https://steve-yegge.medium.com/the-ai-vampire-eda6e4f07163)

Wow this guy knows his stuff.

# From Gas Town to Dark Factory

The things I find strange about Gas Town are the same reasons I'm glad we saw it. It scouts ahead to follow [trends](https://newsletter.pragmaticengineer.com/p/the-pulse-tokenmaxxing-as-a-weird-6b2) to conclusion. To follow them that far, maybe you have to believe in them. I couldn't have done that.

**The results are described as vampiric**.

On the surface, the ~~Layoff Machine~~ Dark Software Factory is motivated by two unchallenged assumptions:

1) Faster is better.
2) The goal of working with agents is to work *only* with agents.

Even if I believed either of those things, the conditions on the ground won't support doing it well. Engineering requires knowing what you're actually trying to build.

[Anthropic](https://snowan.gitbook.io/study-notes/ai-blogs/dario-amodei-end-of-exponential-dwarkesh-2026#key-themes) and [OpenAI](https://openai.com/index/how-enterprises-put-ai-to-work/) have sold ~~a Layoff Machine~~ labor automation. They have sold that it must center around their single unique offering, the frontier language model. They must narcissistically defend that component as the solution to all problems, while insisting no one else be allowed to run one.

They then hand those constraints down to our department to ~~do their homework for them~~ work out the details. Design a system that's **fully agentic**. The stated goal is whatever we'll believe at the moment. ~~Labor automation~~ "Augmentation not replacement". We'll still need you because you have "taste". Definitely not a layoff machine. Be sure to document all your SKILLS. The problem is, these are **bad constraints** even if the premise were honest.

I would be happy to discuss more technically plausible ways of automating me out of a job. They just wouldn't be conveniently centered around the model lab's only moat. So tell me, am I the one trying to justify my existence or are they?

Call me crazy, but I think Yegge knew this 3 years ago and was telling them at the same time I was.

> I was there, 3,000 years ago, when Norvig and Chomsky fought on the volcano.
>
> -- Steve Yegge, [The "Normsky" architecture for coding agents](https://podcasts.apple.com/au/podcast/the-normsky-architecture-for-ai-coding-agents-with/id1674008350?i=1000638599842), Latent Space podcast, December 2023

# Paul Graham used to code

Paul Graham used to write about code, now he writes about [how to earn a billion dollars](https://paulgraham.com/earn.html). That's relatable. I used to write about code too. Now I write about market manipulation.

All I know about Paul Graham's stance on developing software comes from when he was still in the game. Fresh from selling Viaweb to Yahoo, on a mission to build an Arc to last [100 years](https://paulgraham.com/hundred.html). [Ranting](https://www.paulgraham.com/icad.html) that management forced naive uninformed visions on us. You know, programmer stuff. 

I mention this because he's also getting quoted now on topics like whether we should push [50K lines of code in a day](https://digg.com/tech/0wlddu78). Understand, he's not speaking as the `pg` that used to recommend coding strategies. He's wearing his **Venture Capitalist** hat. 

> That's not a reliable source.
> -- Cardi B

Unnamed startup founder bragged to the founder of the Y-Combinator fund. Think of the power dynamics. This was not a conversation meant to convey a complete picture of their dev process. By construction alone, this is one of the most unreliable transfers of information since naming Claude after [Claude Shannon](https://simons.berkeley.edu/news/inside-information-theory-0).

These anecdotes are selective reporting *of* selective reporting. In this case, it reinforces Graham's model that [founders are bulldozers](https://charity.wtf/p/founder-mode-and-the-art-of-mythmaking) and everyone else in the way. It's not like he's going to hear these things and have a retro sitdown with the platform team about what they'd do differently. "Hey, it's Paul again. Last week your CEO just yeeted another huge vibe fix, any thoughts on that?". No.

Whereas, if we're keeping score, I *was* in outage postmortems matching that description. Do you think founders tell VCs the good news and bad news in equal measure? No. They promise VCs a Superintelligence, remember?

Proximity to the pager is reality.

People who followed Paul Graham in the old days will remember, he was *inordinately* concerned with having as **little code as possible** so he could **fit it in his head**. These are good things to care about. He was known to maybe go overboard with it.

* [Being popular](https://paulgraham.com/popular.html), 2001
* [Succinctness is Power](https://paulgraham.com/power.html), 2002
* [Holding a Program in One's Head](https://paulgraham.com/head.html), 2007, with thanks to a young Sam Altman

So what would he think about this new ~~recommendation~~ *idea* that we should grow our codebase as fast as possible without knowing what's in it? Do you even recall who we're talking about?

He thought Java was too verbose, and he built Viaweb in Common Lisp. Then Common Lisp was too verbose, so he made Arc (`fn` was better than `defun`, fair). Then he tried to distill it down further into [Bel](https://www.paulgraham.com/bel.html) and find the fundamental Lisp axioms that hold the [universe](https://www.explainxkcd.com/wiki/index.php/312:_With_Apologies_to_Robert_Frost) together. Not a champion of bloat, this fellow.

What about the Prompts-as-Code hypothesis? Would he buy the Code Abolitionist's position that English is the final perfect programming language?

> It is a mistake to try to baby the user with long-winded expressions that are meant to resemble English. Cobol is notorious for this flaw. A hacker would consider being asked to write
>
>add x to y giving z
>
>instead of
>
>z = x+y
>
>as something between an insult to his intelligence and a sin against God.
>
> -- Paul Graham, [Being Popular](https://paulgraham.com/popular.html)

One thing you can say for him, he doesn't like noise and he doesn't like [spam](https://paulgraham.com/spam.html). Whatever his thoughts are today on code he doesn't have to deal with, his reaction when he *does* have to see LLM output is pointed enough to have triggered the Businesss Insider headline, [Don't use AI when emailing Paul Graham](https://www.businessinsider.com/paul-graham-email-y-combinator-dont-use-ai-writing-2026-5).

We'll table the whole Venture Capitalist conversation because their place in this circus is far too big to unpack. They are in the business of gambling, running massive experiments on humans without IRB approval. 

The point today is that we're trying to listen to people with skin in the game about how they manage code. Investors have any number of unstated reasons to pop into that conversation, and none of them care what happens to you.

> VCs are like car salesmen or bureaucrats: the nature of their work turns them into jerks.
>
> -- Paul Graham, [A Unified Theory of VC Suckage](https://paulgraham.com/venturecapital.html), 2005.

His words, not mine.

# Attention is all you need

[I love you all](https://x.com/sama/status/1725742088317534446) for weaving through this. I can't make it too easy, that would spoil the fun. A quick but vital meta-point here.

**I read stuff**.

When something matters, I like to know what's going on. My reading often extends to *the code*. You can also read other things. [Books](https://www.youtube.com/watch?v=96IA_mnF2FA), for instance. There are books about managing your code, and managing the orgs that like to break your code. I can send you a list.

When the [gossip](https://www.youtube.com/watch?v=kYKI8tAELXY) mill gets going, I like to read what's actually being said.

# Standing in for the Anti-Readers

Having searched the hills, I'm surprised to say I can't find any coherent recommendations that you stop reading. Instead, I see patterns which could create that impression:

* A *perceived need* to stop reading code, so we can merge the 50K PRs.
* People working on some long-term strategy to *eventually* not read code.
* Devs observing that there's *not enough reading* going on, with bad results.
* A flood of gold rush beneficiaries and agent fans acting vaguely defensive about all this.

Welp, we should at least hit the talking points.

Gabriel Doty, tech executive and em-dash fan, speaks for the Anti-Readers in the following satirical [post](https://www.linkedin.com/in/gabrieldoty/). He has helpfully gathered almost every trope in one place. I'll just give it a line-by-line review.

Here we go:

---

>If you're a software engineer insisting that engineers have to read every line of AI-generated code, you're holding AI to a standard you've never held yourself to, and that hypocrisy is holding you back.
>
>You never held human-written code to that standard.

That would not be hypocrisy for two reasons.

1) LLMs are not people. We have every reason to evaluate them in a different way.
2) There are many situations in which human-written code *is* held to the standard of reading every line.

The Linux kernel developers are an example of a highly credible software engineering group that embraces LLMs for parts of their process but still requires manual review of all code. They are [not hypocrites](https://raymyers.org/post/why-linus-is-right-and-ai-is-wrong/) for doing so.

> If understanding code proved software worked, we'd stop after code review. We don't.

True, but does't fully support the conclusion. Understanding code could be necessary but not sufficient.

> We don't even trust the engineer who wrote and understood the code to tell us it works.

I would not frame that as *distrust*, but I take the point. "Trust but verify" and all that.

An organization with high trust promotes problem solving, quality, and productivity. See also the NUMMI experiment, the parable of the Andon Cord, and Project Aristotle.

> We test it, send it through QA, and monitor it in production.

Yep, these things happen.

> The code was never proof that the software worked. Its behavior was.

I take this as fuzzy hyperbole, like "the proof is in the pudding".

More precisely, we are responsible for building confidence in how code *will behave* and for monitoring how that behavior changes over time. We do that through a layered approach that includes both static and dynamic feedback. Static feedback analyzes code, dynamic feedback runs it. 

> "So we are all just vibe coders now?"
>
> A vibe coder trusts the agent.
>
> An agentic engineer builds a system where the agent doesn't need to be trusted.

Nit: I wouldn't classify *any* people as vibe coders, it's an activity. It's what you do, not who you are. It's like how we might consider ourselves "scripting" one task and engineering another.

So ideally, even someone vibe coding doesn't "trust the agent" per se. They are making a decision that their task has low risk or can be checked other ways.

As far as an "agentic engineer", I'm not convinced that's the best goal or even a well-defined path at this point. Maybe you'll have luck. We also have the alternative of being a "software engineer". You can still use agents.

> "What about concurrency, money, authorization?"
>
> We built entire classes of tools because human eyes weren't good enough. The higher the risk, the stronger and more adversarial the verification should become. These aren't exceptions. They're some of the best examples.

Again, slight pushback on the framing of the issue being our eyes aren't "good enough". This reinforces outdated Safety-I thinking, where people are always the problem, and downplays that we are often the solution. Safety-II thinking takes a more optimistic view of the human contribution.

This would be a pedantic nitpick, except that the same cognitive bias is central to the thesis. See also Ironies of Automation.

> You know who hates writing thousands of tests to attack the same assumption from every direction? Humans.

True.

> AI didn't just change the economics of writing code.
>
> It changed the economics of verifying it.


Changed it how? Is the implication that verifying it got easier?

The way coding agents were rolled out *notoriously* made verification harder. Hence a hundred think peices titled, "[Verification Is The New Bottleneck](https://www.google.com/search?q=Verification+Is+The+New+Bottleneck)". That was not solely due to coding agents, because technology does not make decisions. It was driven by the incentives of the AI Gold Rush.

If we want to talk about what *could* be happening instead of what *is* happening. Yes, it can go much better. It's likely that some fraction of organizations are having these better results, though many are exaggerating and telling the public only the good news.

To increase success, I encourage taking skeptics more seriously, not less.

> Agents will happily do it at a scale that was never practical for humans. E2E tests, unit tests, contracts, harnesses and performance checks were expensive to build and maintain.
>
> They aren't anymore.


I'd replace "was never practical" with "was seldom deemed practical". Rigorous automated testing is much more feasible than is generally realized. This is largely a failure to budget for coaching and training.

> And no, I don't mean letting the same agent write a thousand tests that agree with itself. That's not adversarial verification.

Great point, sounds like we should revisit our failure to budget for coaching and training.

> The point is to build a system that challenges the code at the same scale the agents can produce it.

The goal is to generate business value now and in the future. That goal is at tension with a proxy target of growing the codebase as fast as possible. 

> Because if an agent can produce 50,000 lines of changes in a day, but "responsible engineering" requires a human to inspect all 50,000, the agent isn't your bottleneck.
>
> You are.

Love the bottleneck thinking. If we apply that systemically we will often find we didn't need 50,000 lines for the problem in the first place.

> Your value was never the ability to type code. It was your ability to think abstractly, solve problems, hold enormously complex systems in your head, see how thousands of pieces interact, see around corners, and turn all that complexity into something that works.
>
> The code was the artifact.
>
> The thinking was the skill.
>
> And that skill just became dramatically more leveraged.

Very poetic.

I argue that thinking abstractly is amplified by formal notation, not hindered. Therefore, when we look for leverage, we might judge which code gives us leverage and which does not. We cannot jump to the conclusion that the code is irrelevant to our leverage.

Traditionally, we describe code that gives us leverage to be at the right *level of abstraction*.

> Yet we're holding onto practices built around humans writing, reading and maintaining every line and calling that rigor.
>
> Some of those practices existed because of our limitations, not because they're fundamental properties of good software.

This is a gesture in the direction of rethinking things, but there are no actual claims. 

> Use an agent inside those same constraints and you haven't changed engineering. You've just hired a really fast junior developer.

Agents aren't people.

> The job isn't to know every line. It's to verify the system works and use every tool that gives you evidence that it does.
>
> The hardest part of agentic engineering may be accepting that the code was never the point.

Again, it's a strawman of any credible software engineer to say we argue code is "the point".

In fact, I find that most arguments we've heard for the last 3 years that declare LLMs as the inevitable author of all software are rooted in this same fallacy of thinking code is the point. They emphasize speed of code gen as a proxy for value.

> P.S. If you've spent this entire post trying to poke holes in my argument, good.
>
> Hopefully you're bringing that same energy and skepticism to your agents. That's the whole point. 😊

It is, isn't it :)

---

![Someone does not read the code, we move on](/images/posts/reading-code/i-dont-read-thumbs-up.jpg)
