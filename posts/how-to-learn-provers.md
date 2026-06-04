---
title: How to Learn Theorem Provers
slug: how-to-learn-provers
description: Resources for getting started with formal verification.
tags:
  - technical
  - learning
  - formal-methods
added: 2026-06-02T05:00:00.000Z
---

I love theorem provers, but the learning curve is notoriously steep. Here are the resources that helped make them click for me.

## Start here

Play the [Natural Number Game](https://adam.math.hhu.de/).

One of the biggest hurdles getting started is simply understanding what tactics are. Proof scripts cannot be read like normal code because they are a product of interaction with the prover. Ok, let's back up...

Most proof assistants work by running a series of "tactics" against a "proof state" until the goal is solved. If that sentence doesn't 100% make sense yet, play the [Natural Number Game](https://adam.math.hhu.de/).

Seriously. Go beat 5 to 10 levels and come back.

![A Mastodon post by Terence Tao about learning Lean](/images/posts/terence-tao-learning-lean.png)

_Fields medalist Terence Tao [started learning Lean](https://mathstodon.xyz/@tao/111207815216351149) in 2023._

## Surveying the space

Popular proof assistants include Lean, Rocq, Isabelle, ACL2, and Agda. [Lean](https://lean-lang.org/) is the easiest to get started with, as the community has invested heavily in developer experience and documentation.

In the formal methods toolbox, proof assistants can be considered the most general purpose. Other more specialized tools might be worth a look depending on your interests:

- [Logic for Programmers](https://leanpub.com/logic) by Hillel Wayne is a practical introduction to logic and formal methods.
- Hillel's [Let's Prove Leftpad](https://www.hillelwayne.com/post/lpl/) collection shows one simple function verified with many different tools. It's like a Rosetta stone.
- [Leslie Lamport's TLA+ video course](https://lamport.azurewebsites.net/video/videos.html) covers formal specification of distributed systems. If this style seems interesting, I recommend also trying [Quint](https://quint.sh).

## The deep end

So you're ready to try formal verification? Take a deep breath and start working through one of these.

- [Software Foundations](https://softwarefoundations.cis.upenn.edu/) is the classic Rocq curriculum.
- [Software Foundations lectures](https://www.youtube.com/watch?v=BGg-gxhsV4E&list=PLre5AT9JnKShFK9l9HYzkZugkJSsXioFs) by Michael Clarkson are an excellent video companion.
- [Concrete Semantics](http://concrete-semantics.org/) focuses on defining operational semantics, a specification of how programming languages behave. It's in Isabelle.
- [Learn Lean](https://lean-lang.org/learn) is the official jumping-off point for Lean learning material.

Don't skip the exercises.

## You're not dumb

I put this list together hoping you'll find the journey _easier_, but it won't be easy. That's not your fault.

You may struggle at times. I struggled. I gave up. I came back. I tried a different book. I tried a different prover. I gave up again, and came back again. Finally I got it, and it was worth the effort. Abstract math changed how I see the world.

## Bonus: Type theory

> Types are the central organizing principle of the theory of programming languages.
>
> -- Bob Harper, _Practical Foundations for Programming Languages_

See the [Learn-TT](https://github.com/jozefg/learn-tt) repo from Dr. Daniel Gratzer.

You'll find that provers use types in creative and exotic ways. In industrial languages, we are accustomed to types that merely tell us the shape of data being passed around, and sometimes lie even at that. Types can do much more. The provers Lean, Rocq, and Agda use a system called dependent types to encode their propositions. Some even consider types as the foundation for all mathematics.

Happy proving!
