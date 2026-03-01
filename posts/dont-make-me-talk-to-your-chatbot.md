---
title: Don't Make Me Talk to Your Chatbot
slug: dont-make-me-talk-to-your-chatbot
description: >-
  It's fine that people talk to chatbots, but they shouldn't expect me to listen
  to theirs.
tags:
  - work
  - musings
added: 2026-03-01T15:20:11.000Z
---

Let's talk about that moment when AI output shows up unsolicited in a human interaction. It happens a bit much for my taste. What should the etiquette be? I've arrived at a principle I call:

> Don't make me talk to your chatbot.

It's fine that people talk to chatbots, but they should not expect me to listen to theirs. When I *want* to talk to a chatbot, I have plenty of my own.

# Why are we talking?

When I talk to a person, I expect that they are telling me things out of their head — that they have *developed a belief* and are trying to communicate it to me. As a result, the energy I spend trying to understand what they've written will give me insight into what they believe. That's my reason for showing up.

They may have used a chatbot while arriving at that belief, which is fine. But their chatbot interaction was helpful to them in a context, and pasting from it doesn't reliably bring me there.

# Is this controversial?

Although I feel like I'm explaining common sense, I'll be as charitable as I can to potential pushback.

When we say something is noticeably AI-generated, we usually mean it's generated *and* bad communication. Not that one completely implies the other, but it's a pattern.

When we say bad communication, we mean bad for the purpose. A chatbot paste usually isn't outright garbage. More often, it's just verbose and doesn't center the person's intention. It [buries the lede](https://www.merriam-webster.com/wordplay/bury-the-lede-versus-lead), so I'm sifting through it hoping to guess what the core motivation was. In other words, it's *bad communication*.

The effort I spend understanding someone should have some corresponding effort on their behalf to be understood. Lazy communication isn't new, but there's now this asymmetry of energy. Certain kinds of laziness that were at least brief before have now become long and distracting.

## But what if you're good at it?

I hear the objection that someone *could* use AI to iterate, deliberately making good standalone communication. That's probably fine. That could be an exception to the "Don't make me talk to your chatbot" rule. If you keep your reader in mind and put that effort in, you probably aren't the problem that people complain about. The problem is nonetheless real; some of our social outlets are saturated with it. Try to have some empathy for the frustration.

The only acceptable pro-AI response to the accusation of AI Slop is to join team Anti-Slop.

# Have you considered writing?

The simplest way to avoid making people talk to your chatbot is this two-step process:

1) Figure out what you want to say
2) Say it

That first *figuring-out* part is important. When you skip it, you undercut yourself as much as your reader. Understanding your own point of view is an enriching exercise.

Clear writing comes from clear thinking.

# Bare minimum curation

> Omit needless words.
> 
> -- Strunk and White's [Elements of Style](https://www.gutenberg.org/files/37134/37134-h/37134-h.htm)

Let's assume you aren't persuaded that manual writing is best for you at a given moment. You see a *golden nugget* in your chatbot logs, and you want to share it! You are now in danger of "making someone else to talk to your chatbot". Here are a couple of quick hacks to salvage the situation.

1) Make it shorter
2) Say the important stuff first

These concepts of brevity and Journalism's [inverted pyramid](https://en.wikipedia.org/wiki/Inverted_pyramid_(journalism)) are both about *priority*. That's why a chatbot gets them wrong. They are immersed in the task, unaware of what's most important to you and your reader.

If you apply *your* awareness of what's important in a quick editing pass, you've got a good shot of coming out clean. It may not be award-winning prose, but by the standards of day-to-day technical writing, it does the job. It might even do it well. 

# Example: Pull request descriptions

We increasingly use coding agents to create PRs. By default, they generate a PR description with their summary of everything. This has mixed results. It's decent as a change list, but it buries intention.

**What's a reasonable adaptation?**

Some people adopt this convention: Preface the generated text with a short human blurb that gives some framing and implicitly endorses the summary as accurate. For instance, if an agent generates a blurb starting with `# Summary`, you might rename it `# Agent Summary` and add your own note above it to explain e.g. the motivation, key decisions, and any next steps. Conveniently, most agents create PRs in a *Draft* state, so the edit can be performed as we mark it *Ready for Review*.

While not perfect, the human summary pattern is a simple behavior that nudges people into a *bare minimum* of curation. It's a useful social tool. The argument for enforcing it in PR descriptions would be that it becomes easy to tell if someone's doing that bare minimum. As a downside, our rare diligent iterative-AI-writer has their style cramped. They shouldn't need an additional human summary, provided their process works as well as they think it does.

Another exception is when the change is completely routine. If you're bumping a dependency and it's clear why it's being bumped, we don't really need to see a human prelude to that. Our attention isn't being taxed.

If you need precisely enforcable expectations, they won't be perfect wherever your draw the line. They're a best effort. Respect people's capacity and build habitable systems.

## TLDR

The next time you `^V` paste, take a moment to ask yourself, "*Am I making someone else talk to my chatbot?*" A little consideration goes a long way.

Thank you.
