---
title: My top 10 thinkers in agentic coding
slug: 10-thinkers-in-agentic-coding
description: >-
  What to do instead of the Dark Factory.
tags:
  - software-engineering
  - coding-agents
added: 2026-10-07T19:08:51.613Z
---

# Criteria

I'd like to recognize some people who have thought deeply about how coding agents fit into software engineering, and shared what they've learned in a clear accessible way.

Lada Kesseler
Top Resource: [Augmented Coding Patterns](https://lexler.github.io/augmented-coding-patterns)

Geoffrey Huntley
Top Resource: [The Ralph Technique](https://ghuntley.com/ralph/)

Tudor Girba
Top Resource: Rewilding Software Engineering / [Moldable development](https://moldabledevelopment.com/)
Other work: [Glamorous Toolkit](https://gtoolkit.com/)
 
Ivett Ördög
Top Resource: [Habit Hooks](https://habit-hooks.com/)

Liz Fong-Jones
Top Resource: Honeycomb experience report

Part 1: 30 to 70 PRs a Day: How We Managed to Not Wreck Our Systems. https://www.honeycomb.io/blog/30-70-prs-day-how-we-managed-not-wreck-systems

Part 2: AI Amplifies Your Existing Practices: Lessons from Our Shift to an AI-First Strategy
https://www.honeycomb.io/blog/ai-amplifies-existing-practices-lessons-ai-first-strategy

Other work: [Observability Engineering](https://www.honeycomb.io/observability-engineering-oreilly-book) book, updated 2nd edition 2026.


Bryan Finster
Top Resource: Agentic Continuous Delivery
Other work: MinimumCD.org, [Agentic TDD experiments](https://devteam.bryanfinster.com/docs/experiments/FAQ/)

Birgitta Böckeler
Top Resource: [Understanding Spec-Driven-Development](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html)
Other work: [AI-augmented software delivery articles]( https://birgitta.info/)

Adam Tornhill
Top Resource: [Code Health](https://codescene.com/resources/research-and-insights)
Other work: [Agentic AI Coding: Best Practice Patterns for Speed with Quality](https://codescene.com/blog/agentic-ai-coding-best-practice-patterns-for-speed-with-quality)

https://codescene.com/blog/case-study-refactoring-at-scale-with-agents

Dexter Horthy
Top Resource: [Why Software Factories Fail](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/wsff.md)

Paul Hammond
Top Resource: [The dotfiles](https://github.com/citypaul/.dotfiles#-claudemd-the-development-framework), including TDD, mutation testing, design review.



## Bonus: Coding Agent papers

A coding agent is an LLM chat loop that calls tools (ReAct). Those tools  are relevant to software development, including reading, editing, navigation, and execution (Agent-Computer Interface).

We measure their performance using realistic tasks on full codebases (SWE-bench) and in other ways (OpenHands Index).

A more elaborate way to call tools is to have the agent write a script, which may call several tools sendind the results of one into another (CodeAct, Terminal-Bench). This allows Mini-SWE-Agent to work with just one tool, the bash prompt.

Although the open-ended ReAct agent loop has been the dominant architecture, we have also seen strong benchmark results from more restricted LLM workflows such as a fixed order of phases (AgentLess).

- ReAct — [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629). [alphaxiv](https://www.alphaxiv.org/abs/2602.22764)
- SWE-agent — [SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering](https://arxiv.org/abs/2405.15793). [arxiv](https://arxiv.org/html/2405.15793v3)
- CodeAct — [Executable Code Actions Elicit Better LLM Agents](https://arxiv.org/abs/2402.01030). [arxiv](https://arxiv.org/abs/2402.01030?spm=a2c6h.13046898.publish-article.6.78d16ffaTICcfQ&file=2402.01030)
- SWE-bench — [SWE-bench: Can Language Models Resolve Real-World GitHub Issues?](https://arxiv.org/abs/2310.06770). [swebench](https://www.swebench.com/verified.html)
- Terminal-Bench -- [Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces](https://arxiv.org/abs/2601.11868)
- LocAgent — [LocAgent: Graph-Guided LLM Agents for Code Localization](https://arxiv.org/abs/2503.09089). [arxiv](https://arxiv.org/html/2503.09089v1)
- OpenHands-Versa — [Coding Agents with Multimodal Browsing are Generalist Problem Solvers](https://arxiv.org/abs/2506.03011)
- AgentLess — [Agentless: Demystifying LLM-based Software Engineering Agents](https://arxiv.org/abs/2407.01489). [arxiv](https://arxiv.gg/abs/2407.01489)
- OpenHands Index — [Introducing the OpenHands Index](https://www.openhands.dev/blog/introducing-the-openhands-index) — announcement rather than a standalone paper. [openhands](https://www.openhands.dev/blog/introducing-the-openhands-index)
- Mini-SWE-Agent — [The minimal AI software engineering agent](https://github.com/SWE-agent/mini-swe-agent) — project repository; its recommended paper citation is the SWE-agent paper above. [github](https://github.com/swe-agent/mini-swe-agent)
- EvoClaw — [EvoClaw: Evaluating AI Agents on Continuous Software Evolution](https://arxiv.org/abs/2603.13428).
