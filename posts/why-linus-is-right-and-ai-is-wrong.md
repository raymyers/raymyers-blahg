---
title: "Why Linus is Right and AI is Wrong"
slug: why-linus-is-right-and-ai-is-wrong
description: "Here's what they miss about AI criticism: every single thing"
tags:
  - work
  - ai
  - anthropic
  - politics
  - conflict
  - communication
  - empathy
added: 2026-07-23T06:00:00.000Z
---

*This post has a [companion episode](https://www.thecodingagency.org/why-is-ai-political) of The Coding Agency.*

Have you ever had your stomach turn from looking at your own slide deck? This headline did it for me:

> AI is Transforming Software

*Yuck*. It was just a bridge on the way to a more substantial point, but I found that I no longer took myself seriously even starting the journey with such a cliché trope. Instead, I decided to completely reject the framing that "AI is doing X", because it implies AI itself has the agency, some plan for us. It's language of disempowerment.

![Obey sign from the movie They Live](/images/posts/obey.jpg)

What felt more authentic at that moment was: Something is being *done to us*. We do *not* have to [accept it](https://www.myartbroker.com/artist-shepard-fairey/articles/icons-of-rebellion-enduring-power-of-shepard-fairey-obey). You can see how the revision ended up when the [Software Should Work](https://softwareshould.work/) footage drops. We had fun.

Little did I know, at the same moment, today's topic was brewing over in Linux land.

# Meticulous minutia 

The following is the viral message from Linus Torvalds to the Linux Kernel Mailing List on July 14th. The thread is [Re: Linking Patchwork with Sashiko?](https://lore.kernel.org/linux-media/CAHk-=wi4zC+Ze8e+p3tMv8TtG_80KzsZ1syL9anBtmEh5Z40vg@mail.gmail.com/)

I believe his answers at the beginning refer to:

* Yes, if contributors could opt out of Sashiko emails, it would defeat the purpose of using it.
* No, we decline to adopt the first two items of a wordy set of [recommendations ](https://sfconservancy.org/llm-gen-ai/llm-backed-generative-ai-recommendations.html) from the Software Freedom Conservancy.

The questions concern right of refusal in the context of a contributor getting an emailed agentic review for a change they submitted.

>Yes.
>
> And no, that's not the position of the Linux kernel.
> 
>I realize that some people really dislike AI, but this is an area
>where I'm willing to absolutely put my foot down as the top-level
>maintainer.
> 
>Linux is not one of those anti-AI projects, and if somebody has issues
>with that, they can do the open-source thing and fork it.
> 
>Or just walk away.
> 
>AI is a tool, just like other tools we use.  And it's clearly a useful one.
> \[...]
> But the solution is not to put your head in the sand and sing "La La
> La, I can't hear you" at the top of your voice like some people seem
> to do.
>
>The solution is to make sure those LLM tools _help_ maintainers
>instead of just causing them pain. There's no question on that side.
>
>We're not forcing anybody to use it, but I will very loudly ignore
>people who try to argue against other people from using it.
>
> \[...]
>
>The kernel project has been and will continue to be about the technology.
> 
>Sure, the social angle of working on open source is important and
>often a very motivating part of the project, but in the end that's a
>side benefit, not the _point_ of the project.
>
>This is *NOT* some kind of "social warrior" project, never has been,
>and never will be.
>
>In the kernel community we do open source because it results in better
>technology, not because of religious reasons.
>
>And so we make decisions primarily based on technical merit. Not fear
>of new tools.

# Verdict

As an expert in coding agents who is also a vehement AI critic, I find this decision to be... 🥁

**Completely reasonable** and almost a total nothingburger. Sorry if you were looking for fireworks today. Maybe later, if you're good.

Here is my justification:

* [Sashiko](https://github.com/sashiko-dev/sashiko) is a review tool specially made for the needs of the Linux project.
* Agentic review is a [credible](https://beyond.minimumcd.org/docs/agentic-cd/architecture/agent-configuration/) practice when used [in balance](https://beyond.minimumcd.org/docs/reference/practices/definition-of-deployable/) with other checks.
* We would already expect on platforms like GitHub that you get an email when there's automated feedback on your PR.
* IMO the right of refusal is not violated by PR feedback, it's just basic project cohesion.

It shows good courtesy that they were cautious about adding a new email to a contributor's inbox and deliberated about it. My impression is no one actually objected to receiving them, they were just considering hypotheticals. Due diligence, imagine that.

Since outlets are suddenly deciding that Linux's build pipeline config is newsworthy, let me clarify for Tom's Hardware that we have not been [rebuked](https://www.tomshardware.com/software/linux/linus-torvalds-rebukes-anti-ai-stances-in-the-linux-kernel-code-review-process-says-linux-is-not-one-of-those-anti-ai-projects-creator-embraces-ai-as-just-a-tool-and-clearly-a-useful-one). In The Register's piece, [Linus Torvalds tells AI haters to fork off](https://www.theregister.com/ai-and-ml/2026/07/15/linus-torvalds-tells-ai-haters-to-fork-off/5271894), they were of course unable to find or quote any of these haters at press-time... well, other than Linus himself because he's [softening his own previous stance](https://www.theregister.com/software/2024/10/29/linus-torvalds-90-of-ai-marketing-is-hype-so-i-ignore-it/390369).

Stop making up imaginary haters. We are not your enemy.
# Catch up

My thesis today is that **the pragmatic engineer is the natural ally of AI critics**. That's because the conduct we're criticizing is grotesquely unpragmatic. It's excess. There's *too much* of it. 

Frankly, if more CEOs and CTOs thought like Linus, we would not see the level of AI backlash we do today. You know why? Because when you carefully pursue efficient engineering choices, you do not do things like take on [historic amounts of debt](https://www.latimes.com/business/story/2026-07-10/big-tech-piles-on-350-billion-in-debt-to-fuel-ai-data-center-race) and cause a worldwide RAM shortage by fetishizing the most notoriously expensive and inefficient component as the solution to all problems. Nonsense behavior.

Does that sound like something Linus would do? He doesn't even use a [text editor](https://github.com/wllclngn/muEmacs) without trying to lower the memory footprint.

Nonetheless, this trivial event is ready to be coopted by the AI hype machine. Since it would look ridiculous to do a victory dance over the fact that submitting a PR sends you an email, they can just post the colorful language divorced from what's actually being discussed.

It's also worth noting that the Kernel contributor guidelines allow agentic development only under condition that it's 100% manually reviewed and owned.

> The human submitter is responsible for:
>
> - Reviewing all AI-generated code    
> - Taking full responsibility for the contribution

That is a completely mainstream stance, though in other situations it would be branded Anti-AI and [controversial](https://www.youtube.com/watch?v=k13q6ecZLrw).

# The right of refusal

I respect the decisions of maintainers who deal with the outcomes to decide which portions of their code will support agentic development. That includes middle-ground policies like [Ghostty's](https://github.com/ghostty-org/ghostty/blob/main/AI_POLICY.md) (minus the ridicule). And of course I also support Zig's more stringent choice of avoiding LLMs completely, which they [explained](https://kristoff.it/blog/contributor-poker-and-ai/) the history and pragmatics of.

Even people with a vested commercial interest should support right of refusal. During the entire time I worked for a coding agent startup, I publicly defended users' ability to critique or opt-out of the product space. I'm happy to say that the company never hinted that I should stop or that it could hurt sales. It builds trust. Trust is good for business.

What I can't respect is going around [purity testing](https://en.wikipedia.org/wiki/Purity_test_(politics)) people for whether they signal enough AI-ness. It is the position of [The Coding Agency](https://thecodingagency.org/) that attacking human agency defeats the purpose of building agents.

# Lazy weaponization

I saw on LinkedIn:

>Linus says you're putting your head in the sand and singing "La La La, I can't hear you"

Who do they think Linus is referring to? Me? [The Pope](https://en.wikipedia.org/wiki/Magnifica_humanitas)? There's no information about what this behavior would be, it's just color. Someone is applying their own personal purity test and fantasizing that Linus agrees with it. 

You might also infer that when he says they're not one of "those anti-AI projects", that means the people that *are* in those projects are just scared to learn, and have no well-considered reason based on their experience. Did he say that? I'll admit I fell into that trap for a moment, but it's just not in the text, it's gluing together separate remarks.

And again you might think Linus is attacking the whole idea of being a "social warrior", whatever that means to you. Yet, he clearly acknowledges that it's central to the open source movement and he's drawing boundaries for the purposes of his project.

In the big picture, I find Linus to be deeply engaged in [prosocial behavior](https://en.wikipedia.org/wiki/Prosocial_behavior) with a concern for sustainability and systemic effects.
# Rhetoric

What I'm doing here is rhetoric, writing with intent to influence. We see rhetoric every day, some more honest than others. The only unusual thing is that I'm lifting the hood to explain my methods, much like we do with source code.

I'm employing a rhetorical technique we'll call The Kings Council pattern. In this pattern you avoid directly criticizing a powerful figure, since that can lead to retaliation from their followers. Any grievances would instead be attributed to people around them. Since the king is mighty and wise, some flattering advisor must be the problem. This pattern has been used throughout history, from [Ezekiel 11](https://www.biblegateway.com/passage/?search=Ezekiel%2011-16&version=ESV) to [good tsar, bad boyars](https://en.wikipedia.org/wiki/Good_tsar,_bad_boyars) which were both before the Unix [epoch](https://www.explainxkcd.com/wiki/index.php/607:_2038).

Thanks to safety science we now understand that is so easy to pull off because a failure has [No Root Cause](https://surfingcomplexity.blog/2024/05/26/the-problem-with-a-root-cause-is-that-it-explains-too-much/). Blaming [the system](https://www.amazon.com/dp/1603580557?lv=shuf&channelId=500&plpRedirect=mhFallback)  would also be acceptable. Any systems thinker knows that [systems gonna system](https://how.complexsystems.fail). But I digress.

Clearly, Linus is a king. Look at all he's done. I've looked up to him for most of my life, and so have an army of others. If there's anything problematic about the situation, it would be unwise to try and make it his fault. At the very least, you'd really want to have your ducks in a row. "Come at the king, you best not miss", as we learned from The Wire.

I'm willing to show you my game here because I don't think I have anything to hide. I believe what I'm saying and use the pattern to be fair and diplomatic. Knowing how to dissect people's rhetoric helps you decide for yourself if it's honest.

Being honest is not the same as being neutral. I have motives. I'm not just going around clarifying things for my own amusement (though obviously that's another hobby of mine). You could say I have an "axe to grind" on this topic. So let's grind.
# Puppeteering

Acting as though Linus picked a side in the larger conversation while he's actively trying not to pick a side is dishonest. It's an unscrupulous act of AI gold rush hype. His goal is to avoid pulling Linux into an ongoing flamewar. Therefore anyone trying to weaponize his words to silence AI critics elsewhere it going against his goals. See, the problem is not the King, it's the King's council.

The charged language he uses is typical speech from him and his intended audience on the mailing list is accustomed to interpreting it. The fact that he self-described as "loudly ignoring" supports my overall case that he's not positioning himself as having any robust view about all AI critics.

In textual analysis, putting words in someone else's mouth is called "eisegesis".

* Exegesis: drawing meaning *out* of the text by careful, objective analysis
* Eisegesis: reading one’s own ideas into the text, forcing it to support a preconceived view

I argue that despite having my own view I am doing good faith analysis and sticking to exegesis. What I'm finding in the text was there to be found.

You may wonder: Is the text itself especially prone to dishonest analysis (eisegesis)?

Sorry, that's off topic. Under the pretext of managing scope (but really for rhetorical convenience) I will avoid taking any clear stance on whether Linus is good at writing emails. Rather than criticizing his tone, which would be weak tea, I choose to applaud his personal growth in improving [over time](https://www.destroyallsoftware.com/blog/2018/a-case-study-in-not-being-a-jerk-in-open-source). No one was [ugly and stupid](https://trilemma.technology/2011/11/23/git-for-ugly-and-stupid-people/) on this day. The King is wise and merciful.

# Motivation

The AI discourse is an absolute mess, as you are *painfully aware*. I hate seeing us turned against each other like this. Unpacking some of the background forces might help, because on the ground floor we're being asked to make sense of things that just [don't make sense](https://www.youtube.com/watch?v=pa-Z5QCZQNg). For instance, you may have heard that:

**Anthropic is actively campaigning to end software engineering to support a trillion dollar IPO.**

Look, I have practical needs. I do not want my DevTool vendors to falsely advertise the [impending end of my field](). I believe that to be counterproductive.

And yes, I'm aware that the campaign will eventually fail on its surface goals. Then again, that depends what success means. Another potential outcome is a huge trainwreck that consolidates power around a few AI labs.

I see companies where management increasingly defines success as *more* agents, the more the better. I see [tokenmaxxing](https://blog.pragmaticengineer.com/the-pulse-tokenmaxxing-as-a-weird-new-trend/). Top websites [destroying](https://newsletter.pragmaticengineer.com/p/why-is-meta-destroying-its-engineering?utm_source=multiple-personal-recommendations-email&utm_medium=email&triedRedirect=true) their engineering orgs. I see people with reasonable concerns getting silenced and [threatened](https://en.wikipedia.org/wiki/Left_Behind). 

What's going on? In my expert opinion: shenanigans, tomfoolery, and furthermore poppycock.

Since we're using the technical terms today, what I'm calling here is... [Bullshit](https://www2.csudh.edu/ccauthen/576f12/frankfurt__harry_-_on_bullshit.pdf).

**We are being manipulated**.

# On target

Anthropic CEO Dario Amodei is safe to criticize, he is **not a king**. I would mention Claude Opus 4.5 with more respect than I'd show Dario at this point. (Cheers, Opus)

> One of the most deceitful companies I have ever seen. - [The Primeagen](https://www.youtube.com/watch?v=6QryFk4RYaM)

While I'd graciously accept the title of social warrior if you're passing them out, you can't pretend that *we're* the ones who made AI a hot-button issue.

* Who branded their own research a [human extinction](https://aistatement.com/work/statement-on-ai-extinction-risk) risk in 2023?
* Who's [going on CNN](https://www.cnn.com/2025/05/29/tech/ai-anthropic-ceo-dario-amodei-unemployment) and talking about 20% unemployment?

You guessed it. It's Dario, the same person who expects us to rearchitect all knowledge work around components they admit mimic [sycophancy and subterfuge](https://www.anthropic.com/research/reward-tampering), and MIT researchers describe as [persuasion bombing](https://mitsloan.mit.edu/ideas-made-to-matter/how-generative-ai-persuasion-bombs-users-and-how-to-fight-back) us. 

In a nutshell, people [like](https://aistatement.com/work/statement-on-ai-extinction-risk) Dario repeatedly incite [panic](https://www.nytimes.com/2026/06/17/opinion/ai-dangerous-openai-anthropic.html?eafs_enabled=false) and wind up with more powerful through venture capital and [regulatory capture](https://darioamodei.com/post/policy-on-the-ai-exponential#1-regulation-and-public-safety).

At times you would almost suspect he's getting in front of major decision makers and saying things he *knows* sound completely insane.

> This is another one of those topics that's gonna make me sound completely insane. - [Dario, Council on Foreign Relations](https://www.youtube.com/live/esCSpbDPJik?si=-Rm0HOZh2hAynju4&t=2972)

Whether these acts of manipulating the market constitute **market manipulation** is the purview of the Securities and Exchange Commission, whatever's left of it. I can't claim to know what's in someone's head - especially when that person has built a delusion machine.

> You can say I'm high on my own supply if you want. - Dario, Council on Foreign Relations

Whatever the game is, it's being done to us rather than with us. [What's he building in there?](https://www.youtube.com/watch?v=04qPdGNA_KM) Don't tell me it's a [country full of geniuses in a datacenter](https://stefanbauschard.substack.com/p/a-country-of-geniuses-in-a-data-center). That's word salad. The good news for Software Engineers is we still have a lot of power because they need us to work out all the details for them. Will teachers be so lucky?

We won't get into the whole cosmology today, I just hope that was helpful in illustrating that there are *actual reasons* someone might be concerned about how the AI rollout is going. Skeptical. Inquisitive. *Critical*, if you will.

# Rebooting

One thing that should now be abundantly clear is that **language is a tool**. We benefit from learning how to use it well and how it might be used against us. If you need to stay heads-down for now and just be "all about the tools", becoming more aware of language is still a meaningful step you can take.

Since we all agree the communication hasn't been going well, I'd like to propose some tweaks.

Henceforth, I declare it OK to be Anti-AI because **AI is ideology**. It's [many things](https://faculty.washington.edu/ebender/papers/Bender-AI-2026.pdf), but that's the one I see as dominant today. That's what the gold rush did. I will try to only use the term "AI" to mean ideology and call the technologies by their specific names like Agent, LLM, or Knowledge Graph.

People will still find the phrase "Anti-AI" confusing, so I would default to "AI critical" as I've done today.

Next, recall that we value people's agency. Naturally then, we resist *language of disempowerment*. These are deprecated:

* [Left Behind](https://www.rogerebert.com/reviews/left-behind-2014)
* This is inevitable
* [Resistance is futile](https://tvtropes.org/pmwiki/pmwiki.php/Main/ResistanceIsFutile)
* We can't stop it
* Adapt or die 
* Luddite

They sound like attempts to intimidate people into doing something that's bad for them. There are better ways to [negotiate conflict](https://www.youtube.com/watch?v=wP1vD2pguvs). Try substituting language of ownership and choice.

Finally, I will *never* refer to a computer program as a Team, Teammate, Coworker, [Engineer](https://www.youtube.com/watch?v=jhkY_BUDVcU), [Doctor](https://www.youtube.com/watch?v=kOxpn_m3wIY), or [Lawyer](https://www.ftc.gov/news-events/news/press-releases/2025/02/ftc-finalizes-order-donotpay-prohibits-deceptive-ai-lawyer-claims-imposes-monetary-relief-requires). I consider that an act of violence.

If you fear mismanagement or layoffs, this is a good time to consider [collective action](https://logicity.in/en/blog/how-to-unionize-your-tech-workplace-a-practical-guide).

# Solidarity

It's only fair we also take a moment to speak to the AI critics. I know you're upset. We've been gaslit.

What we don't need to do is pretend that the hands-on-keyboard devs trying to make sane choices are the ones who created the problem. I do not see them as the enemy, quite the opposite. As I mentioned earlier, common sense engineering would have applied GenAI in a far more judicious way instead of trying to jam it into every nook and cranny of the internet.

The average dev may come off as "pro-AI" on any given day but that's just a shibboleth everyone's expected to say now. To even discuss the tradeoffs people feel a need to preface it with "I'm not Anti-AI, but...", to display an acceptable level of compliance with the token vendor's marketing strategy. It's messed up, but we're all doing our best.

Many people became AI critical on issues like ecological impact and funding the arts because of their personal ethics and were disappointed that other people didn't seem to care. Still, there's every reason to be AI critical based on [professional ethics](https://www.acm.org/code-of-ethics). That means *there are allies all around us*. More than we realize. 

Here are some healthy choices I'm trying to make:

* I will be happy for the people excited about exciting stuff.
* I will offer solutions instead of gatekeeping for Vibe Coders when they get stuck.
* I will recognize today's conversation isn't yesterday's.
* I will not read the Hacker News comments on my articles, to respect your privacy ;)

Thank you for reading my second epistle.
