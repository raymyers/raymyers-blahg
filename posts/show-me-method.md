---
title: The Show-Me Method
slug: show-me-method
description: >-
  What to do instead of the Dark Factory.
tags:
  - software-engineering
  - coding-agents
added: 2026-09-27T19:08:51.613Z
---

The post outlines a common sense pattern for coding agent adoption. I call it The Show-Me Method, as in [The Show-Me State](https://www.sos.mo.gov/symbol/motto) or "show me the code". The Show-Me Method is *pluralistic*, endorsing multiple levels of agentic adoption, and the judgement to choose which is appropriate.

*I first presented this in my talk "Code Worth Writing" at [Software Should Work](https://softwareshould.work/) conference. I'll expand further in "Dark Factory Considered Harmful" at [AI DevCon New York](https://tessl.io/devcon) in November.*

# The impossible question

Is fully-agentic coding "the future"? That question is interesting and highly-funded, but not so helpful when you're trying to ship.

* Production lives in the present.
* There is no single answer because **not all code is the same**.

Different domains have different needs. Even within one application, different components have different needs.

In practice, this informs how we address the **[code review bottleneck](https://www.honeycomb.io/blog/embracing-code-review-bottleneck)**. Instead of asking how we can stop looking at code, the reframed question is "which code should we be looking at, and why?"

# The flexible approach


The **Show-Me Method** embraces that the ideal level of agentic adoption varies and encourages creating a deliberate boundary between heavily agentic code and code that needs closer review. The boundary is renegotiated over time as your situation changes.

![Show Me Method showing a boundary between agentically maintained and human maintained](/images/posts/show-me-method/show-me-method.svg)

When this is successful, we can picture moving that boundary further to the right and to be closer to the Dark Factory. However I expect it will usually be more desirable that some portion of critical code remains "visible".

![Show Me Method: heavy agentic](/images/posts/show-me-method/show-me-method-heavy-agentic.svg)

Since we aim to support both people and agents as maintainers, we can't improve them merely by optimizing for agents at the expense of readability. However, **people and agents use the same tools**, so improving the underlying tools is an investment that helps both.

![Show Me Method: showing that both agents and people use the same tools](/images/posts/show-me-method/show-me-method-tools.svg)

Some examples of tool investments are Formal Methods and safer programming languages.

# Level of adoption

When we talking about coding "more" agentically, we're roughly talking about this spectrum.

0. Manual coding
1. Auto-complete (LLM-based)
2. Agents write, people read closely
3. Agents write, people read at-a-glance
4. Agents write, nobody reads

Remember, more agentic is not necessary better! These are not like the levels of a video game where the goal to get to the end. When we decide the level, that's a judgement of what kind of code we're dealing with.

* Code worth writing (0, 1)
* Code worth reading (2, 3)
* Code worth forgetting (4)

# Needs are different

Since not all code is the same, we would not expect the same automation to work for everyone. Coding agents generally enable faster development at the cost of increased risk. Let's consider how this plays out in different domains.

Which is more important: risk avoidance or speed of development?

![Agentic level: spectrum using agents less when risk dominates and more where speed dominates](/images/posts/show-me-method/agentic-level-less-to-more.svg)

In E-commerce we will often see heavier agent use because the risk is relatively low. 

![Agentic level: e-commerce tends higher because of risk being less of a factor vs speed.](/images/posts/show-me-method/agentic-level-e-commerce.svg)

In Healthcare we will often see more measured agent use because the risk is relatively high. 

![Agentic level: healthcare tends lower because of risk being more of a factor vs speed](/images/posts/show-me-method/agentic-level-healthcare.svg)

# Changing the tradeoffs

Obviously risk depends on factors other than your domain, and some of the factors are in your control. When we are skilled at managing risk that can enable more agentic coding. See [MinimumCD](https://beyond.minimumcd.org/docs/start-here/) for more discussion as it relates to [Continuous Delivery](https://beyond.minimumcd.org/docs/start-here/) practices.

# Why not Dark Factory?

The [Dark Software Factory](https://tessl.io/patterns/agentic-development-workflow/dark-factory/) suggests that as we adopt coding agents, end state is that we use *only* agents and stop reading the code completely. One day we "turn the lights off" and never look at code again.

![Dark factory diagram showing humans interacting with agents and only agents touching code](/images/posts/show-me-method/dark-factory-diagram.svg)

The problem is that chatbot prompts are simply not a complete replacement for code. We can build elaborate harnesses trying to account for everything that goes wrong, but it's much simpler to just stay close to the details. Keep the lights on.

> I don’t read code looking for obvious bugs any more, the robots are perfectly good at that. I do read the code looking for design and maintainability and readability issues.
>
> \-- Liz Fong-Jones (ex-Google, Technical Fellow at Honeycomb)

* [Why Software Factories Fail](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/wsff.md) - Dexter Horthy (ex-NASA, founder of HumanLayer)
* [Reading Code Considered Helpful](https://raymyers.org/post/reading-code-considered-helpful/) - my survey of the current consensus and pressures against it
