---
title: How to Learn Theorem Provers
slug: how-to-learn-provers
description: Resources that helped theorem provers and proof assistants click for me.
tags:
  - technical
  - learning
  - formal-methods
added: 2026-06-01T05:00:00.000Z
---

I love theorem provers, but their learning curve is notoriously steep. Here are the resources that helped make them click for me.

# Start here

One of my biggest hurdles getting started was simply understanding what proof tactics are.

Most proof assistants work by running a series of "tactics" against a "proof state" until the goal is solved. If that sentence doesn't 100% make sense to you yet, play the [Natural Number Game](https://adam.math.hhu.de/).

Seriously. Go beat 5 to 10 levels and come back.

# Surveying the space

Popular proof assistants include Lean, Rocq, Isabelle, ACL2, and Agda. [Lean](https://lean-lang.org/) is the easiest to get started with, as the community has invested heavily in developer experience and documentation.

* [Let's Prove Leftpad](https://www.hillelwayne.com/post/lpl/) by Hillel Wayne is a collection showing the same simple function verified with many different tools.
* [Logic for Programmers](https://leanpub.com/logic), also by Hillel Wayne, is a broader introduction to formal methods.
* [Leslie Lamport's TLA+ video course](https://lamport.azurewebsites.net/video/videos.html) covers formal specification of distributed systems. If this style seems interesting, I recommend also trying [Quint](https://quint.sh/).

# The deep end

So you're ready to try formal verification? Take a deep breath and work through some chapters from one of these.

* [Software Foundations](https://softwarefoundations.cis.upenn.edu/) is the classic Rocq curriculum.
* [Software Foundations lectures](https://www.youtube.com/watch?v=BGg-gxhsV4E&list=PLre5AT9JnKShFK9l9HYzkZugkJSsXioFs) by Michael Clarkson are a video companion.
* [Concrete Semantics](http://concrete-semantics.org/) focuses on defining operational semantics, a specification of how programming languages behave. It's in Isabelle.
* [Learn Lean](https://lean-lang.org/learn) is the official jumping-off point for Lean learning material.

# You're not dumb

I put this list together hoping you'll find this journey *easier*, but it won't be easy. That's not your fault. You may struggle at times. I struggled. I gave up. I came back. I tried a different book. I tried a different prover. I gave up again, and came back again.

Finally I got it.

# Bonus: Type theory

> Types are the central organizing principle of the theory of programming languages.
>
> -- Bob Harper, *Practical Foundations for Programming Languages*

See the [Learn-TT](https://github.com/jozefg/learn-tt) repo from Dr. Daniel Gratzer.

You'll find that some provers use types in strange new ways. In industrial languages, we are accustomed to types that merely tell us the shape of data being passed around, and sometimes lie even at that. Types can do much more, even serving as a foundation for all mathematics. The provers Lean, Rocq, and Agda use a system called dependent types to encode their propositions.

Happy proving!
