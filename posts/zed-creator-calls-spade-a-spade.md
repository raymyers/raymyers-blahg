---
title: Zig Creator Calls Spade a Spade, Anthropic Blows Smoke
slug: zed-creator-calls-spade-a-spade
description: >-
  Programming language drama ensues as tech bros oversell the end of software engineering.
tags:
  - work
  - musings
  - ai
  - zig
  - anthropic
added: 2026-07-12T18:55:30.703Z
---

> I harass the sea with my tiny boat and am called a pirate, you do it with a great fleet and are called a king.

**Anthropic is actively campaigning to end software engineering**. They need you to believe they can do that. Well, maybe it's not you that they need to convince. Maybe it's your C-Suite, various world leaders, or the manager of your retirement fund. They've raised $132 billion in investment, and are approaching an IPO valued over $1 trillion. Since they cannot show [profitability](https://www.wheresyoured.at/anthropics-profitability-swindle/), this depends on selling their hypothetical future impact. 

In literary terms, Anthropic is an *unreliable narrator*.

One of their key narratives is: [Coding is going away, then the rest of software engineering](https://youtu.be/02YLwsCKUww?si=NCcT1_VEm4g4NjZw&t=97), and eventually [most other human labor](https://www.cfr.org/event/ceo-speaker-series-dario-amodei-anthropic). This kind of money behind this kind of story has an impact, regardless of how true we think the story is. 

People will make architecture, product, and staffing decisions based on these events. Many of those decisions will be based on fear - fear of layoffs, rapture-esk warnings of being "Left Behind", [Doom Trolling](https://www.nytimes.com/2026/06/17/opinion/ai-dangerous-openai-anthropic.html?eafs_enabled=false), etc...

To make good decisions we need to think clearly, which is hard right now. Put on your skeptical hat.

Views are my own. I have no history with Zig. I've never spoken to Andrew Kelley, but found his recent [JetBrains interview](https://www.youtube.com/watch?v=iqddnwKF8HQ) a great watch.

My interest here is in public literacy about AI in software. That's been my career focus now for 3 years, along with improving the technology itself. During half of that time I was Chief Architect of a coding agent startup - both a customer of Anthropic's models and competitor to their agent Claude Code. My current project is [The Coding Agency](https://www.thecodingagency.org/).

# So where were we?

This week, Anthropic / Bun put out their [explanation](https://bun.com/blog/bun-in-rust) of the decision to port Bun from Zig to Rust. This explanation came two months after merging the migration to the mainline. Explaining the direction *beforehand* would have been more traditional in an infrastructure project like this, but meanwhile the delay conveniently allowed the story to be carried by sexy headlines like The Register's [Anthropic’s Bun Rust rewrite merged at speed of AI](https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381). Much invest. Very wow.

Zig's creator Andrew Kelley has now [put out a response](https://andrewkelley.me/post/my-thoughts-bun-rust-rewrite.html) with his own thoughts. It's blunt, to an unusual degree. That has questionable optics. As a general rule, you would not want to worry that when you switch programming languages you will wake up the next morning to the old language's leader unloading on your personal flaws. As Dax [hilariously](https://www.linkedin.com/posts/thdxr_guys-we-have-a-pretty-substantial-opensource-share-7481579102622216192-E4-Q/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAB7o1UBSVk_MWfFO9AbldIjAI4xeROkC8k) put it:

> guys we have a pretty substantial opensource zig codebase and i'm terrified he's gonna look at it

Still, as I read Andrew's piece I found myself *cheering out loud*. I may have briefly jumped around the room. Some called his take a "meltdown", all I can say is he's gained a new fan today.

Sometimes things need to be called out.

# What is model behavior?

On my best days I'd aspire to something like [Buddhist right speech](https://tasshin.com/blog/reflections-on-buddhist-right-speech/), a high standard that everything we say should meet all five of these criteria.

* Is it true?
* Is it helpful?
* Is it timely?
* Is it kind?
* Is it *from* kindness?

We're breaking decorum a little, straying into "true, but unkind" territory. I'm defending someone's choice to do that. I don't do that lightly, and I hope it's helpful.

# Background

Just to catch you up...

* Bun is a TypeScript runtime, like a faster NodeJS.
* Zig is a systems programming language, like a modern C.
* Bun was written in Zig until recently - one of the largest Zig codebases.
* Bun claims [near 100%](https://x.com/jarredsumner/status/2054525268296118363) AI contributions.
* Zig allows [0%](https://ziglang.org/code-of-conduct/) AI contributions.
* Bun was acquired by Anthropic, a leading AI model lab.
* Bun's founder experimented with a massive agentic rewrite from Zig to unsafe Rust.
* That experiment was merged days later and is now the official version.

This situation is controversial on a few fronts, though apparently no one involved actually wants Bun to stay in Zig. The drama lives purely in the meta-discussion. The migration process itself is pretty interesting, I would consider doing something similar in the right situation.

# Who to believe

When people choose between Zig and Rust for their projects, they will naturally see the Bun situation as a data-point. That fact that one of the biggest Zig users wound up reversing the decision feels relevant, regardless of the reasons. People will try to understand what happened, and decide which is more true:

> **Anthropic/Bun story**: Bun tried everything reasonable, and was still overwhelmed by memory bugs because Zig wasn't up to the task.

> **Andrew's story**: The Bun code is a mess because of their engineering decisions, including overusing AI agents to write and review everything.

I'd lean more toward the latter, but I suspect the dominant factor is more boring:

>**Ray's story**: Faced with a legitimate challenge of memory bugs, there were several viable options. Management eagerly approved the Rust rewrite option because it was a great marketing opportunity to showcase their new Fable model, Anthropic already [uses Rust](https://www.anthropic.com/careers/jobs), and Zig is openly against using Anthropic's products.

That makes fine business sense, it just isn't a marketing story. The marketing needed to focus on how their AI was powerful enough to do this rewrite (even though it was not powerful enough to catch a use-after-free).

For better or worse, this baggage is now top-of-mind in the Rust vs Zig question. The situation tends to pit Jarred's judgement against Andrew's in the eye's of the community. Any face-saving exaggeration spoken through Anthropic's megaphone could unintentionally affect Zig's reputation.

I can understand why rather than leave well enough alone, Andrew would decide to... *add some context*. 

# Is this a smear?

From my perspective, Anthropic is the party we need to hold accountable here. That's what this is all about. Bun founder Jarred Sumner is getting caught in the crossfire in a sense. So is Zig.

It would be nice if this could be discussed strictly on the technical points, and we'll get to them. However, I don't think Anthropic is making a technical argument, they are dealing in spectacle.

Anthropic is using Jarred's credibility to help sell their narrative. In responding to that, we're commenting on his credibility. That's messy. I don't love it.

Still, if reporting the things that someone says and does comes off as a smear, then maybe that behavior was part of the problem too.

# The meat grinder

My first impression of the Bun project was the 2022 announcement, including this warning to recruits. 

> Oven is going to be a grind, especially the first nine months or so. If work-life balance means a lot of time spent not working, it’s probably not a good fit.

When I see a statement like that from a prospective manager, it says a number of things, not the least of which is "this person has no idea what they are doing". A lot of reasonably good coders have never seen an example of a good manager, and have all kinds of weird ideas about what management is.

Running at "crunch time" all the time is bad for health and bad for productivity. That is a robustly established fact about knowledge work. For some references, see the Human Factors section of Hillel's [Empirical Software Engineering](https://www.hillelwayne.com/talks/ese/). 

My advice? Don't work for people that brag about [90 hour weeks](https://x.com/jarredsumner/status/1544821137128927232). Work for people who will defend your ability to sleep at night.

In Andrew's piece, he summarizes what he's heard from the grapevine of the Bun team's experience:

> Poor communication, unrealistic expectations, low empathy, no experience. Just a total shit show

I mean... of course it was. The hearsay is essentially repeating what was announced publicly. Their job listing might as well have said, "now seeking applicants for total shit show". It's bad form for us to say this out loud. We're supposed to let the Tech Bros go on about how cutting corners is some genius productivity hack. Then the people that listen to them can eventually call us in to fix the results. It would be a great arrangement if I cared less about outcomes. It's quite lucrative.

FWIW, I've used Bun a few times and liked it well enough. Cool tech is often produced in spite of bad work environments. I'm not the one saying that their environment resulted in a buggy unmaintainable mess, *Bun is the one saying that*.

# Say something nice

The piece about the migration process is very cool, with details that are reusable. No complaints, I think that's the real contribution here. I particularly like the honesty in explaining that this was a port to [unsafe](https://bun.com/bun-unsafe-audit) Rust, allowing a literal file-by-file migration to minimize risk, paving the way for redesign in future steps. That's a sensible move explained well.

There's some truth to the idea that language choice is becoming more reversible. This method will take it's place among other types of rewrite automation with [pros and cons](https://tomassetti.me/ai-rpg-migration-semantic-gap/). These techniques can be combined and further hardened with Formal Methods. Darpa's [TRACTOR](https://www.darpa.mil/research/programs/translating-all-c-to-rust) (Translating All C to Rust) research program published a [report](https://github.com/DARPA-TRACTOR-Program/Reports/blob/main/First_TRACTOR_Evaluation_Report.pdf) this year which should cover the state of the art.

My favorite book on software modernization projects is [Kill It With Fire](https://nostarch.com/kill-it-fire) by Marianne Bellotti. As agents allow us more moves we can make with old code, we still need good judgement and communication in deciding where to go. Let's talk about that next.


# The rewrite rationale is fluff
These are the basic ingredients of explaining a technical decision:

* What is the motivation?
* What options did you consider?
* What are the pros and cons?

Here's a [great example](https://gist.github.com/rtfeldman/77fb430ee57b42f5f2ca973a3992532f) by Richard Feldman on his decision to move the Roc compiler from Rust to Zig. I was initially shocked by that move (I'm somewhat fanatical about language safety), but ultimately his points made sense and this started my curiosity about Zig.

When the Bun rewrite was merged, I'd hoped to see a similar treatment. This is what we got instead, two months late.

* ✅ What is the motivation?
* ⚠️ What options did you consider?
* 🚫 What are the pros and cons?

For the aspiring tech leads out there: When you skimp on these ingredients, especially the "pros and cons", you risk giving the impression that you approached the problem with one answer already in mind and are giving it a post-hoc justification. Maybe you have reasons that you aren't saying.

It feels dishonest.

# All pros no cons

Rather than a real tradeoff comparison, we get a "Bun is better in Rust" section covering only upsides. A change like this always has trade-offs, an obvious one would be build time.

Typically when you use Rust for a large codebase, you are buying safety and paying in slower compilation. There's no shame in that, it can be a winning bargain. In that past, this factor was important enough to Bun that they [forked the Zig compiler](https://ziggit.dev/t/bun-s-zig-fork-got-4x-faster-compilation-times/15183/19) to try and improve it. If we're right that the Rust port increased build time for contributors, why not disclose that? It comes off as more credible to own the impact and the priorities that make it right move overall.

They also seem to be padding the list by mixing in other improvements they've made after the rewrite that aren't really related to it.

## They didn't try a style guide?

Recall that the motivation was memory bugs. Definitely not Bun's only source of bugs but a frequent one, causing four fix commits per week by my count. Painful.

Theoretically, every memory bug represents a violation of some convention - an expectation of how this kind of object should be dealt with. Therefore it behooves us to establish a clear idea of what's expected in what circumstance. We should try to use any language effectively for that matter, Rust [style guides](https://rust-lang.github.io/api-guidelines/)  are a thing too, but manual memory management adds scope to the expectations we need.

How have other people solved this problem? Another flagship Zig codebase is TigerBeetle, a financial transaction database. It is not plagued by memory bugs, in fact it appears to be one of the most reliable databases in existence. They will gladly tell you that this is due to their [TigerStyle](https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/TIGER_STYLE.md) approach and some innovative [testing strategies](https://tigerbeetle.com/blog/2023-07-06-simulation-testing-for-liveness/). Worth a look! The word "style" might undersell it, it's a whole engineering philosophy with Zig coding guidelines as one element.

Here's a taste of TigerStyle. Not every application can copy-and-paste this exact strategy, but it illustrates the relationship between memory allocation and other design decisions.

> All memory must be statically allocated at startup. **No memory may be dynamically allocated (or freed and reallocated) after initialization.** This avoids unpredictable behavior that can significantly affect performance, and avoids use-after-free. As a second-order effect, it is our experience that this also makes for more efficient, simpler designs that are more performant and easier to maintain and reason about, compared to designs that do not consider all possible memory usage patterns upfront as part of the design.

Clearly, if we're weighing a rewrite in Rust, we'd first consider if we should use the current language differently. Hear's how Bun's write-up presents that option.

> Many projects opt to answer these kinds of questions through a style guide. TigerBeetle's [TigerStyle](https://tigerstyle.dev/) is an example in Zig and Google's 31,000 word [C++ style guide](https://google.github.io/styleguide/cppguide.html) is another. The challenge with style guides is enforcement. How do you make sure the style guide is followed? Historically, code review was the answer with best-effort enforcement via linters & static analyzers.

I expected the next sentence to discuss Bun's style guide, why it wasn't working, perhaps how it evolved over time... nope. They seem to just pay lip-service the primary way the community addresses their problem, shrug their shoulders and move on. Did I miss something? Over four years on a project of this size, it's surprising they didn't seriously attempt this if they experienced these problems. It's almost like the project was run by someone who tries to [hold all the context in their head and never have meetings](https://x.com/jarredsumner/status/1544821137128927232).

What's more bewildering is that they dismiss style guides with hesitations that are *refuted within their own article*. Consider that classic objection that guides are hard to enforce. Fair, though maybe an odd barrier for a team advanced enough to fork the compiler they use. Here's the thing, they already claim to have solved the enforcement problem because they use agentic review. `PORTING.md` is itself a style guide, scoped to the migration process. They have just conducted an agentic review of their entire rewritten codebase against stringent guidelines and declared it a success.

This doesn't make sense. Let's assume agentic review works, I think it [can](https://beyond.minimumcd.org/docs/agentic-cd/) under the right circumstances. That would require design and well-thought guidelines. I think they were simply more excited about putting that mental energy into a rewrite than a re-architecture, for any number of unstated reasons. It may have been the right choice.

## We're still worried about syntax?

There's one more bit I want to nitpick, a common cognitive dissonance in discussions about agent-first coding. Bun's piece briefly dives into to the weeds of what a "style guide option" might look like.

> Having a rigid style guide with clear ownership expectations explicitly spelled out in the type system was a real option for Bun. Since Zig has no operator overloading, we would likely end up with a lot of code looking something like this:


```zig
fn foo(a_ptr: SharedPtr(TCPSocket)) !void {
  const a: *TCPSocket = a_ptr.get();
  defer a_ptr.deref();

  const b = try do_something_with_a(a);
  defer b.deref();

  // ...
}
```

> This is less ergonomic than the Zig we expect:

```zig
fn foo(a: *TCPSocket) !void {
  const b = try do_something_with_a(a);
  // ...
}
```

OK hold on here. So on the one hand we should not be worried about million line PR we can't review, but we *should* be worried about three extra lines to nail the pointer handoff at an interface boundary?

Regardless of what the best Zig idioms might be here, or whether operator overloading is ergonomic (probably not), this is signed by the same person who [says](https://x.com/jarredsumner/status/2054525268296118363):

> we haven't been typing code ourselves for many months now

Is code for people or isn't it? If code is not for people, why are we worried about an occasional `SharedPtr` wrapper hurting our eyes?

I could take or leave this example as being a legit readability problem, I just want some consistency from AI companies on the *fact* that the concerns like readability still exist. They are cagey about it because it contradicts their prophesy of the end software engineering. 
 
It would be inconvenient if maintainability still mattered because their products default to making it worse.
# Admit that AI is not enough

Returning to the narrative. The technical improvements were ultimately a side benefit of this agentic rewrite. The real business function was *publicity*. It helped Anthropic tell the story it needs to tell, the story that "AI is enough". You can accept that framing if you like.

The same events can also support the opposite narrative.

* We wrap LLMs in Agent harnesses because AI isn't enough.
* Bun chose Rust's borrow-checker because AI isn't enough.
* Bun prefers to avoid pointer wrappers for readability because AI isn't enough.
* Bun emphasized the structure of the code would be familiar to maintainers because AI isn't enough.
* While researching this, I caught 50 bugs in the Zig version of Bun using a hybrid approach because AI isn't enough (Project Bunsen).
* Open Source maintainers [are](https://www.reddit.com/r/opensource/comments/1q3f89b/open_source_is_being_ddosed_by_ai_slop_and_github/) [overwhelmed](https://kristoff.it/blog/contributor-poker-and-ai/) [sifting](https://github.com/ghostty-org/ghostty/blob/main/AI_POLICY.md) [useful](https://redmonk.com/kholterhoff/2026/02/26/generative-ai-policy-landscape-in-open-source/) contributions from low effort slop because AI isn't enough.

Anthropic needs people to believe that all problems can be solved by adding more agents, even the problems that agents introduce. Instead of better tools we buy tokens. Instead of learning skills we paste a `SKILL.md`. Instead of reading about [The Psychology of Software Teams](https://www.drcathicks.com/) we call some parallel agent sessions a [Team](https://code.claude.com/docs/en/agent-teams).

Anthropic's campaign to end software engineering is counter-productive for everyone involved. You can adopt coding agents without making the [Dark Software Factory](https://news.ycombinator.com/item?id=46801848) your platonic ideal, I promise. I'll expand on this position with a direction for programming language design at [Software Should Work](https://softwareshould.work/) conference next week.

We are here to build things that people want and build them well. In the AI bubble, we are pressured to build things nobody wants, poorly. Pop the bubble.
