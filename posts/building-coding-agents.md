---
title: How To Build a Coding Agent
slug: building-coding-agents
description: >-
  The fundamentals of constructing coding agents: LLM chat loops, tool-use with
  ReAct, and Agent Computer Interfaces for software development.
tags:
  - technical
added: 2025-07-25T23:02:19.000Z
---

Over the past year coding agents have seen massive adoption and become flagship offerings from AI leaders like Anthropic, OpenAI, and Google. Watching these agents work can feel like magic. To fully explore their potential we need to demystify them. If you're considering contributing to an Open Source agent or even creating one of your own, this should get you off to the races!

The most common style of coding agent today is a chat loop between a user and an LLM that can perform useful software development tasks. To achieve that, there are just 3 tricks to understand beyond the LLM itself.

* How do we create an LLM chat loop?
* How can a chat loop use tools?
* What tools do we need?

Let's take these one-by-one.

## LLM chat loop

Large Language Models (LLMs) do not have a memory beyond their training, every prompt is a new interaction. When we have conversations with these models, the chat loop creates continuity by including a view of the entire conversation in the prompt.

LLM prompt size has a limit called the context window, so as the conversation gets longer we must determine how to create that condensed view.

```python
events = [system_prompt_message]
while True:
  events.add(get_user_input())
  response = call_llm(condensed_view(events))
  show(response)
  events.add(response)
```

## Tool-Use
By themselves, LLMs can only return a response within their training set. However, we can let them ask for help when needed, unlocking many more possibilities. Examples of tools are knowledge sources like a web search and actions like editing a file.

We simply add a list of tools in the prompt and LLM can respond with a special command to trigger the tool. After running the tool we re-prompt the LLM with the result.This simple but profound technique is called ReAct (Reasoning + Acting) in the literature.

Presto, our chat loop is now an agent loop!

```python
events = [system_prompt_message]
user_input_needed = True

while True:
  if user_input_needed:
    events.add(get_user_input())
  response = call_llm(condensed_view(events))
  events.add(response)

  thought, tool_request = parse_llm_response(response)
  show(thought)

  if tool_request:
    show(tool_request)
    tool_result = execute(tool_request)
    events.add(tool_result)
    show(tool_result)

  user_input_needed = not tool_request
```

## Tools for coding

In order to develop an app, at minimum we need to be able to navigate the source code, make edits, and run it. Pulling in outside knowledge like documentation is going to be on our wishlist soon after that. These things seem easy for us to do because we have our text editor and web browser, but keep in mind that LLM interacts with the world differently.

An LLM does not have a screen or a mouse, so it's non-trivial to have it do something like "use a web-browser", our familiar interfaces are of little use. Our command line tools are closer to LLM-friendly, though even simplified versions are often best. Here's an example of the series of actions leading up to an edit.

* list_dir . (current directory)
* list_dir src
* list_dir src/main/java
* open src/main/java/MyApp.java
* scroll_down
* scroll_down
* scroll_down
* replace_lines 178 179 "..."

Since the process of navigating the codebase and testing a change can take many steps, keeping the context down to managable size is key. You can see here that a that a large file is not viewed all at once but in a sliding window. A set of tools tailored for agents to use is often called the ACI (Agent Computer Interface).

Here's how a step of the interaction might look from the agent's point of view.

```
System: You are a software engineering agent. When given a task, break it down into steps and think through each action before taking it. Format your responses as:

Thought: [your reasoning about what to do next]
Action: [the specific action to take]

After each action, you'll receive an Observation with the results. Continue this cycle until the task is complete.

Available actions:
- list_dir <path>: List contents of a directory
- open <file>: Open and display a file
- scroll_down: Scroll down in the current file
- replace_lines <start> <end> <content>: Replace specified lines
- search <pattern>: Search for text in current file

User: Please fix the bug in MyApp.java where the authentication method is not properly handling null values.

Thought: I need to explore the codebase to understand the structure and find the MyApp.java file to examine the authentication bug.

Action: list_dir .

Observation: [current directory contents shown]

Thought: I can see the project structure. Let me look in the src directory to find the Java source files.

Action: list_dir src

Observation: [src directory contents shown]
```

## Recommended reading

* ReAct: Synergizing Reasoning and Acting in Language Models (tool use)
* SWE-bench (agent evalulation)
* SWE-agent (introduces ACI, optimizing tools for LLMs)
* [mini-swe-agent](https://github.com/SWE-agent/mini-swe-agent) the spirit of SWE-agent packed into 100 lines!
* CodeAct (the agent powering OpenHands)
* LocAgent (navigating large codebases)

Bonus topocs:

* Agentless (alternative more determanistic task flow)
* SWE-Gym (training)
* SWE-Smith (fine-tuning)
* Versabench (evaluating a wider variety of tasks)
