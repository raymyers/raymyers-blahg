---
title: My Top 10 Thinkers in Agentic Coding
slug: 10-thinkers-in-agentic-coding
description: >-
  People to learn from in 2026.
tags:
  - software-engineering
  - coding-agents
added: 2026-10-07T19:08:51.613Z
---

I'd like to recognize some people who have thought deeply about how coding agents fit into real-world software engineering, and made their insights clear and accessible.

| Who | Resources |
| --- | --- |
| <span class="person"><img class="avatar" src="https://github.com/lexler.png?size=128" alt="" width="48" height="48"><strong>Lada Kesseler</strong></span> | 🏆 [Augmented Coding Patterns](https://lexler.github.io/augmented-coding-patterns) 🏆 |
| <span class="person"><img class="avatar" src="https://github.com/ghuntley.png?size=128" alt="" width="48" height="48"><strong>Geoffrey Huntley</strong></span> | [The Ralph Technique](https://ghuntley.com/ralph/) |
| <span class="person"><img class="avatar" src="https://github.com/girba.png?size=128" alt="" width="48" height="48"><strong>Tudor Girba</strong></span> | [Moldable development](https://moldabledevelopment.com/) / Rewilding Software Engineering with Simon Wardley |
| <span class="person"><img class="avatar" src="https://github.com/devill.png?size=128" alt="" width="48" height="48"><strong>Ivett Ördög</strong></span> | Start with: [Habit Hooks](https://habit-hooks.com/) <br> (also a contributer to [Augmented Coding Patterns](https://lexler.github.io/augmented-coding-patterns))|
| <span class="person"><img class="avatar" src="https://github.com/lizthegrey.png?size=128" alt="" width="48" height="48"><strong>Liz Fong-Jones</strong></span> | Start with: [30 to 70 PRs a Day: How We Managed to Not Wreck Our Systems](https://www.honeycomb.io/blog/30-70-prs-day-how-we-managed-not-wreck-systems)<br>Then: [Observability Engineering](https://www.honeycomb.io/observability-engineering-oreilly-book), 2026 edition |
| <span class="person"><img class="avatar" src="https://github.com/bdfinst.png?size=128" alt="" width="48" height="48"><strong>Bryan Finster</strong></span> | Start with: [Agentic Continuous Delivery](https://beyond.minimumcd.org/docs/agentic-cd/)<br>Then: [MinimumCD.org](https://minimumcd.org/), [Agentic TDD experiments](https://devteam.bryanfinster.com/docs/experiments/FAQ/) |
| <span class="person"><img class="avatar" src="https://cdn.bsky.app/img/avatar/plain/did:plc:32x54tb7qsm3n2h7q4lwbagi/bafkreibcqlrszn7kxubim3aad72n3xa5qt766ats25hxmmzbx7yic7am34" alt="" width="48" height="48"><strong>Birgitta Böckeler</strong></span> | Start with: [Understanding Spec-Driven-Development](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html)<br>Then: [AI-augmented software delivery articles](https://birgitta.info/) |
| <span class="person"><img class="avatar" src="https://github.com/adamtornhill.png?size=128" alt="" width="48" height="48"><strong>Adam Tornhill</strong></span> | Start with: [Code Health](https://codescene.com/resources/research-and-insights)<br>Then: [Agentic AI Coding: Best Practice Patterns for Speed with Quality](https://codescene.com/blog/agentic-ai-coding-best-practice-patterns-for-speed-with-quality), [Case study: refactoring at scale with agents](https://codescene.com/blog/case-study-refactoring-at-scale-with-agents) |
| <span class="person"><img class="avatar" src="https://github.com/dexhorthy.png?size=128" alt="" width="48" height="48"><strong>Dexter Horthy</strong></span> | [Why Software Factories Fail](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/wsff.md) |
| <span class="person"><img class="avatar" src="https://github.com/citypaul.png?size=128" alt="" width="48" height="48"><strong>Paul Hammond</strong></span> | [The dotfiles](https://github.com/citypaul/.dotfiles#-claudemd-the-development-framework), including TDD, mutation testing, design review. |

This list is scoped to people who have made key concepts in agentic development more teachable by putting out an influential self-contained resource.

If you're interested in building agents, not just using them, I've collected some highlights for you below as well.

# How Do Coding Agents Work?

A Coding Agent is an LLM chat loop that calls tools (ReAct). Those tools must be relevant to software development, e.g. reading, editing, navigation, and execution (Agent-Computer Interface).

We measure their performance using realistic tasks on full codebases (SWE-bench) and in other ways (OpenHands Index).

A more elaborate way to call tools is to have the agent write a script, which may call several tools sending the results of one into another (CodeAct, Terminal-Bench). This allows a workable agent in just 100 lines (mini-swe-agent) by using the bash prompt as the only tool.

Although the open-ended ReAct agent loop has been the dominant architecture, we have also seen strong benchmark results from more restricted LLM workflows such as a fixed order of phases (Agentless).

## Recommended papers

- ReAct — [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629).
- SWE-agent — [SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering](https://arxiv.org/abs/2405.15793).
- CodeAct — [Executable Code Actions Elicit Better LLM Agents](https://arxiv.org/abs/2402.01030).
- SWE-bench — [SWE-bench: Can Language Models Resolve Real-World GitHub Issues?](https://arxiv.org/abs/2310.06770) / [leaderboard](https://www.swebench.com/verified.html)
- Terminal-Bench — [Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces](https://arxiv.org/abs/2601.11868)
- LocAgent — [LocAgent: Graph-Guided LLM Agents for Code Localization](https://arxiv.org/abs/2503.09089).
- OpenHands-Versa — [Coding Agents with Multimodal Browsing are Generalist Problem Solvers](https://arxiv.org/abs/2506.03011)
- Agentless — [Agentless: Demystifying LLM-based Software Engineering Agents](https://arxiv.org/abs/2407.01489).
- OpenHands Index — [Introducing the OpenHands Index](https://www.openhands.dev/blog/introducing-the-openhands-index) tracking benchmarks across a variety of tasks.
- Mini-SWE-Agent — [The minimal AI software engineering agent](https://github.com/SWE-agent/mini-swe-agent) — project repository; its recommended paper citation is the SWE-agent paper above.
- EvoClaw — [EvoClaw: Evaluating AI Agents on Continuous Software Evolution](https://arxiv.org/abs/2603.13428).
- [Position: Humans are Missing from AI Coding Agent Research](https://zorazrw.github.io/files/position-haicode.pdf)
- [An Empirical Study on Failures in Automated Issue Solving](https://arxiv.org/pdf/2509.13941)

As we attempt to solve problems at layers we now call the "orchestration", "harness", or "factory", it's worth remembering that the agents themselves are built on assumptions we can change. Thanks to Open Source agents and public research, there is no barrier to rebuilding the foundation as needed.
