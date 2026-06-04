---
title: Proposal for MoonBit Formal Semantics
slug: moonbit-semantics-proposal
description: >-
  A proposal to formally define MoonBit's operational semantics and lay the
  groundwork for type soundness proofs.
tags:
  - technical
  - learning
  - formal-methods
  - ai
  - coding-agents
added: 2026-06-01T05:00:00.000Z
---

_This was my proposal for the [2026 MoonBit Software Synthesis Challenge](https://www.moonbitlang.com/2026-scc). The organizers gave a friendly and thoughtful response, but considered it out of scope for the competition._

MoonBit aims to provide strong assurances to its users. For instance, its website says it has a sound type system. But is that just a claim, or a real mathematical result?

This project would formally define the operational semantics for the current MoonBit language. That would pave the way for further work, including:

- Program logics for verifying MoonBit programs
- Theorems about the language's properties
- Verified reference interpreters
- A verified compiler
- Compiler testing oracles that compare the reference implementation with the production version

## Scope

MoonBit's compiler includes these intermediate representations: AST, Typed-AST, Core, Mcore (monomorphized), Clam, and WASM.

This project would aim to define semantics for at least two of these IRs, as well as prove their type soundness. That proof would be the first tangible result from this foundation. Type soundness consists of preservation and progress properties, which would each need theorems from minimal axioms.

## Tech choices

This is planned to be developed in the Lean theorem prover due to its recent strong ecosystem growth and investment into developer experience from the Lean FRO. CSLib's transition system would be used for semantics because that library is the emerging standard for computer science foundations within Lean.

It would also be reasonable to choose provers like Rocq, Isabelle, and ACL2, which have longer track records on software problems. However, having tried all of these, my experience is that tooling and UX are the overriding factors for a project like this.

I'm seeing that there is now some experimental work on MoonBit verification with Why3, and I'm open to steering this work to reinforce that plan if desired: [MoonBit language verification](https://docs.moonbitlang.com/en/latest/language/verification.html).

The coding agents I'll likely use are OpenHands and Claude Code, because I know them best, but others would be equally suitable and that choice doesn't bind future work.

An MCP server (Model Context Protocol), such as Numina, would be used to give the coding agent navigation of API docs and proof state. See [project-numina/numina-lean-agent](https://github.com/project-numina/numina-lean-agent).

Model choice would include Claude Opus 4.6, which has been shown to perform well on proofs. See [VALS ProofBench](https://www.vals.ai/benchmarks/proof_bench).

## Feasibility

Benchmarks and anecdotal use have shown that coding agents are ready to contribute to formal verification projects of significant size. See Leonardo de Moura's post, [When AI Writes the World's Software, Who Verifies It?](https://leodemoura.github.io/blog/2026-2-28-when-ai-writes-the-worlds-software-who-verifies-it/).

However, it isn't yet a well-traveled path to use an agent to mechanize semantics based on compiler code. This is an experiment, and feasibility within the deadline is a hypothesis.

## Why MoonBit

MoonBit is exciting to me because it combines correctness with ergonomics. It draws from lessons of languages like Haskell and OCaml, such as type inference and algebraic datatypes, and puts them in a simple modern package. It's also early enough that there is still a chance to influence the future of the language and help create a bridge to formal verification.
