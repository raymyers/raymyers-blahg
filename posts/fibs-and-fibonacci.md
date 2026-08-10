---
title: Fibs and Fibbonacci - is LOGOS faster than Zig?
slug: fibs-and-fibbonacci
description: >
  Another fake compiler. Nothing to see here. Do not read this article.
tags:
  - musings
  - ai
  - zig
  - compilers
  - beef
added: 2026-08-03T18:55:30.703Z
---

A **fib** is a trivial or childish lie.

The **Fibonacci** sequence is an elegant progression of numbers first documented by Indian poet-mathematician Acharya Pingala circa 200 BCE. It was dubbed "Fibonacci" after Leonardo of Pisa, who included it in his "Book of Calculation" (Liber Abaci) in 1202.

The same book helped popularize what we now call Arabic numerals. My top 5 favorite Arabic numerals are 1, 2, 3, 4, and 5. No order. Honorable mention 0. 

The Fibonacci sequence begins 1, 1, 2, 3, 5, 8, 13, more on that later.

We are gathered here to evaluate the claim:

> LOGOS is the fastest general purpose programming language on earth.

For disambiguation, we're speaking of the LOGOS at `logicaffeine.com`, *not* the Logos at `logos-lang.dev` or the [Logo](https://en.wikipedia.org/wiki/Logo_(programming_language)) educational language from 1967 that drew the pictures with the turtle.

# Is LOGOS the world's fastest programming language?

No. We are well within [Betteridge's law of headlines](https://en.wikipedia.org/wiki/Betteridge%27s_law_of_headlines). My assessement:

* There is no general concept of a "fastest programming language", just the fastest for specific jobs.
* LOGOS helpfully provides full details of their [benchmark runs](https://logicaffeine.com/benchmarks) ([archive](https://web.archive.org/web/20260419184020/https://logicaffeine.com/benchmarks)).
* The examples are not realistic workloads, they are algorithm teaching examples.
* As a basline, LOGOS performs like Rust because it generates Rust code.
* LOGOS claims speedup in a handful of the examples in these ways:
	* Implementing well-known optimizations that systems languages deliberately leave to the programmer, like [Memoization](https://aclanthology.org/J91-1004/).
	* Replacing loops with [closed-form](https://github.com/Brahmastra-Labs/logicaffeine/blob/ca89b6f/crates/logicaffeine_compile/src/optimize/closed_form.rs) solutions that directly target these toy benchmark problems.
	* Implementing C and Zig examples in non-idiomatic ways, e.g. choosing naive recursion over Iteration, signed integers for unsigned data.
* In practice, these are **non-optimizations**.

My conclusion is that calling this the "fastest general purpose programming language" is **not a credible claim**. To be charitable, it's best to assume the authors are not intentionally deceptive but just not yet literate about compiler performance trade-offs. They are [upfront](https://www.linkedin.com/posts/tristen-harr_subsidymoat-share-7444497327685537792-8Raz/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAB7o1UBSVk_MWfFO9AbldIjAI4xeROkC8k) about staying distant from implementation details, generating millions of lines of code with "3 Claude Code Max subscriptions \[...] running at all times".

By the way, a great introductory book on compiler design is [Essentials of Compilation - An Incremental Approach in Racket](https://github.com/IUCompilerCourse/Essentials-of-Compilation) by Jeremy Siek.

You may now be asking the same question I'm asking myself: Why am I wasting my time reviewing someone's vibe coded compiler? Who even asked me to pay attention to this?

# We were protested

Last month I had the honor of speaking at the first [Software Should Work](https://softwareshould.work/) conference. It was an amazing two days with a wealth of knowledge on stage and off. Footage is [on YouTube]( https://www.youtube.com/@softwareshouldwork), you should check it out!

When we arrived, we were shocked and amused to find a pair of protesters across the street. I have to admit that if their goal was to get attention, I cannot resist taking the bait here. It's a genuinely interesting thing that happened. Everyone I've told this story to has asked the same question:

> Who would protest Software Should Work? Do they think software **shouldn't** work?!

What an enigma! My first clue on the motivation was a cardboard sign saying "**Stop Gatekeeping Programming**".



# Gates and their keepers

When we think of gatekeeping in software nowadays, it’s often part of the AI conversation: who should be programming and how, Vibe Coding and such. As far as that goes, I stand by my remarks from April 2023 in "[Will AI Democratize Programming?](https://www.youtube.com/watch?v=7YxD8R9Q_Bo)" We have always sought to democratize programming and should continue to. There are many successes, including Excel, HyperCard, Visual Basic, and Python. We’re not done because making things simple is harder than it looks.

Who else gatekeeps programming? It's worth remembering that some groups were historically marginalized or excluded from the field due to their identity - regardless of the fact that they learned the skills. We still have work to do in addressing that. Employment inherently has gatekeepers, and so does funding (see: [Discrimination In the Venture Capital Industry](https://www.yezhang.space)). I had my doubts that the two white men waving signs were among those affected, but I was ready to hear them out.

"Who exactly is gatekeeping programming?", I asked.

It turns out **they were "protesting" being denied a speaker slot at the conference**. They had submitted a lightning talk after the deadline and were upset that the organizer would not alter the schedule to add them (while continuing to deny the other late submitters, one assumes).

Lacking a speaker slot, they still wanted to promote their product and apparently didn't see the organic conversations as enough opportunity. They then proceeded to *publicly bash the event* until they were asked not to attend, came anyway, and were ejected. (That sequence of events is not in dispute; I heard the same facts from the organizer and the "protesters".)

There are some interesting aspects of their LOGOS language to talk about, but obviously the behavior is the first thing that gets noticed here. "Rude and entitled" are words that come to mind. Since they've tried to make a case that the organizer wronged them, I'd like to respond wearing my organizer hat. In tech conferences my role is speaker, not organizer. I'll draw upon my other experience.

Fun fact, I organized rap concerts for almost a decade. 
# Not enough mics

Pras of The Fugees [reminds us]([https://www.youtube.com/watch?v=jg2J6Q9SEKM](https://youtu.be/jg2J6Q9SEKM?si=UubG-R8xUJAt9djS&t=191)) of the eternal logistics of supply and demand.

> Too many MC's not enough mics

When you run music shows, this is a fact of life: every so often a member of the crowd will decide they should be the one performing on stage. Most of the time you can just clarify that isn't the format. Open Mic Night is Monday, this is Saturday. However, sometimes they insist, and you *handle it* as discreetly as possible.

Talk to any bouncer and you'll quickly find out this is far from the weirdest reason people get thrown out of bars.

From the perspective of the person trying to produce a live show, there is no realistic option to accommodate these requests. You have a curated lineup to execute and fires to fight behind the scenes before they become visible to the audience. There will be a hundred random pressures to switch things up. The people raising requests don't have the big picture to understand what's feasible and what's not. You have to filter out the noise.

I recall a few occasions where these "volunteer performers" reacted to being denied stage-time by insisting "*I'm from New York*". One assumes this meant one of the boroughs, not Westchester. Still, it wasn't as compelling a reason to interrupt the show as they'd hoped. I notice the “New York Gambit” was mainly thrown around at the small town shows in Columbia, MO. They didn’t try that at my Chicago shows.

Regardless, as a general rule this behavior is not a good look. In the technical jargon, it's *wack*.

# The valley hath spoken

We must have very different ideas of what gatekeeping is, because the holder of that very same cardboard sign, "Stop Gatekeeping Programming", responds to feedback with some of the most gatekeeping statements I've heard in my *entire life*. Someone in charge of securing the perimeter of the Gates Foundation couldn't gatekeep this hard: 

(sf = San Francisco)

![LinkedIn post saying that only people from San Francisco understand tech](/images/posts/fib/sf-puffery.png)

# What's the goal?

Getting back to the LOGOS language promotional stunt. Whether we consider any action productive depends on [the goal](https://www.tocinstitute.org/the-goal-summary.html). I'm not going to get bogged down discussing whether it was "good marketing". If you want an expert on DevTool growth, you can read [Ana Hevesi](https://uploop.dev/guide/introduction). For me, it was counter-productive. I'm speaking for my own goals as a user and builder of these tools.

I want a healthy relationship between coding agent users and reluctant adopters. I spend a lot of energy mediating the tensions and outlining ways forward for balanced agentic development.

Therefore, it's frustrating for my agenda when someone vibe codes way over their head, makes dubious claims, and then acts rude and entitled about it. That's a [common pattern](https://github.com/ocaml/ocaml/pull/14369#issuecomment-3556593972), and it doesn't help our case if we want reluctant adopters to take our whole agent value proposition seriously.

In fact, while we were having fun at the Software Should Work conference, Codeberg was voting to [ban LLM-heavy repositories](https://blog.codeberg.org/protecting-our-floss-commons-from-llms.html). We are watching the beginnings of a schism in the open source community. I don't want that, and it's clear this isn't just a fear of new technology. It's a reaction to resource usage and *behavior*.

As a cherry on top, if someone really wanted to get my goat, they could also take potshots at the language I'm hoping to contribute to.

![Brochure saying LOGOS > Zig](/images/posts/fib/logos-vs-zig.jpg)

Sure enough, the "protesters" had aligned their promo with the headliner of the conference by taking on Zig. This part had a happy ending, they reported:

![LOGOS creator and Zig creator take a photo together](/images/posts/fib/logos-zig-peace.jpg)

> Andrew Kelley was not at all what I expected! We really need to be meeting folks in person instead of online, seems like a super cool dude, and here I was ready to go to declare war with Zig. He thought my Logos > Zig brochure was funny!

That's true, it was funny.

# What's actually there?

Per the [LOGOS roadmap](https://logicaffeine.com/roadmap), these are some things it does.

* Express code in a constrained English subset
* Translate to Rust
* Model statements in first-order logic backed by a SAT solver 
* Certify results using Calculus of Inductive Constructions
* Express security policies
* Design chips, maybe?

That's a lot of things. Who is it for? According to the homepage, anyone.

> Students, engineers, researchers, and attorneys — anyone who thinks for a living.

As much as I agree with the idea of making logic more accessible, there is an avalanche of assumptions in pulling together such a hodge-podge of ideas with no particular audience in mind. If you want to know how well your tool helps an attorney do their job, talk to an attorney. Watch them use it for real work. Learn about the prior attempts.

Or I guess you could ask a chatbot to time the [Ackermann function](https://mathworld.wolfram.com/AckermannFunction.html). Everyone needs a hobby.

After already wading through deceptive performance claims and a smear campaign, I can't pretend to have enough patience to evaluate how well these features work in whatever context they are supposed to.

The concepts themselves are neat and have history. Here are some resources.

* [Controlled natural language](https://en.wikipedia.org/wiki/Controlled_natural_language) takes an existing human language like English and applies restrictions for readability or machine analysis.
  * [Attempto Controlled English](https://attempto.ifi.uzh.ch/site/resources/) works with Semantic Web tools like [OWL](https://www.w3.org/OWL/).
  * [Logical English](https://github.com/LogicalContracts/LogicalEnglish) allows legal contracts and legislation to be encoded in Prolog.
  * [Inform 7](https://ganelson.github.io/inform-website/) is for writing interactive fiction like text-based adventure games.
  * [Gherkin](https://cucumber.io/docs/cucumber/step-definitions) allows you to write acceptance tests in natural sentences by defining your own patterns with parameters.
* Learning logic
  * [Logic for Programmers](https://leanpub.com/logic) by Hillel Wayne
  * [The Art of Logic in an Illogical World](https://eugeniacheng.com/math/books/) by Eugenia Cheng
* Calculus of Constructions is a form of Dependent Types, allowing complex propositions about the code to be encoded as types and checked.
  * [Lean prover](https://lean-lang.org/) and the [Natural Number Game](https://adam.math.hhu.de/)
  * [Software Foundations](https://softwarefoundations.cis.upenn.edu/) textbook series using Rocq prover 
  * I've listed more in my post, [How to Learn Theorem Provers](https://raymyers.org/post/how-to-learn-provers/).
* Security policy languages
  * [Cedar](https://cedarpolicy.com/) policy language.
    * Developed by AWS using [verification-guided development](https://www.amazon.science/publications/how-we-built-cedar-a-verification-guided-approach).
    * Recently extended with [Dogwood](http://aws.amazon.com/blogs/opensource/introducing-dogwood-runtime-verification-for-ai-agents), which uses temporal logic.
  * [Open Policy Agent](https://www.openpolicyagent.org/docs)

For what it's worth, I think **controlled natural language** is underrated. These formats take expertise to *write* - it's not "just writing English" - but it lowers the barrier to *read*. Therefore, you might consider them when being more accessible is worth the extra effort up front, such as in a specification.

To make code more relatable, a more common approach is **Domain-Specific Languages (DSLs)**. In that model, our goal isn't just to remove jargon - we might also *add the jargon* of the domain. Since we want to help experts think, we design around their context and vocabulary. [Markus Völter](https://voelter.de/dsls.html) is a leading thinker on DSLs. Another lesson from his work is that textual DSLs aren't always best. Many solutions are closer to spreadsheets. There are even "projectional editors," which maintain code in multiple forms, e.g. textual and graphical.

# Owning our feelings

If you've listened to [Empathy in Tech](https://podcasts.apple.com/us/podcast/star-trek-and-empathy-stereotypes/id1750947457?i=1000664669629), you know that I wasn't a Deanna Troi kid. I was a Data kid. Still, I've learned from rewatching Star Trek TNG on [Trek Virgin](https://www.trekvirgin.com/) (my *other* other podcast) that Data has emotions too! He had them the whole time. Even before the special chip.

We're all emotional beings, there's no use denying it. I had wonderful feelings about being on a conference lineup with amazing people that influenced my career. I had *other feelings* seeing the organizer who gave me that opportunity get dragged through the mud for a publicity stunt. Having their employer contacted. All because they wouldn't be bullied into giving out more stage time than they had.

For me, it's the same old song. Instead of concerts, it's a tech conference. Instead of "I'm from New York", the reason someone expects special treatment is... something about San Francisco ([?](https://softwareshouldactually.work/)). Either way, there's still *not enough mics* for people who lack the patience to listen first. There never is.

I've seen how scenes die. The few people with the energy to put events together have their energy slowly drained by a bunch of little crap like this. The people that endure have stamina and thick skin. Let's try not to make it harder on them than it already is.

Backing up, we can see that even though I feel personally undermined and insulted by what happened, *and* I have some logic on my side, my reaction is clearly connected to my own history and baggage. Sometimes to move forward you have to [put your baggage down](https://www.youtube.com/watch?v=SAxPLSvvbXY).

# Palate cleanser

Life *feels* simpler when we pretend it's all about code, doesn't it? Let's retreat to our comfortable place.

The first two Fibonacci numbers are 1. The rest are the sum of the previous two. Mathematically, we might say:

```
Fib is a function on integers >= 0.

Fib(0) = 1
Fib(1) = 1

For n > 1:

Fib(n) = Fib(n-1) + Fib(n-2)
```

Here's a normal way to write Fibonacci in C.

```c
long fib(long n) {
    long a = 0, b = 1;
    for (long i = 0; i < n; i++) {
        long temp = b;
        b = a + b;
        a = temp;
    }
    return a;
}
```

The benchmark for "Iterative Fibonacci" for C has a slight variation, I've added comments explaining.

```c
// Convenient constant to prevent integer overflow.
// See: https://www.geeksforgeeks.org/dsa/modulo-1097-1000000007/
#define MOD 1000000007

long fib(long n) {
    long a = 0, b = 1;
    for (long i = 0; i < n; i++) {
        long temp = b;
        // Compute the next number, preventing overflow.
        b = (a + b) % MOD;
        a = temp;
    }
    return a;
}
```

Next we'll look at the LOGOS version.

# Decoded?

The LOGOS syntax guide begins:

> LOGOS is a programming language where you write code in natural English. Instead of cryptic symbols and arcane syntax, you express your ideas in sentences that read like plain prose—and those sentences compile into efficient, executable programs.

This is the Iterative Fibonacci benchmark example in LOGOS. It runs slightly slower than C, at parity with Rust (because it compiles to Rust).

```md
## To native args () -> Seq of Text
## To native parseInt (s: Text) -> Int

## Main
Let arguments be args().
Let n be parseInt(item 2 of arguments).
Let mutable a be 0.
Let mutable b be 1.
Let mutable i be 0.
While i is less than n:
    Let temp be b.
    Set b to (a + b) % 1000000007.
    Set a to temp.
    Set i to i + 1.
Show a.
```
I can already hear you saying that this doesn't look much like natural English. For instance, `Let`, `Mutable`, `arguments`, arrow, colon, percent signs, and most of the parentheses are being used in ways *nobody* would expect outside of a program. Is this really more natural? I'll reserve judgement. I don't know the audience, and it's just a prototype.

There will always be choices about what notation to expose. It's a matter of finding a net win. Think of how Python uses `and` / `or` instead of our usual `&&` / `||`. The examples in the big bulleted list above show that this is a real design space. To see how a new solution is working, I encourage engaging with a *target audience*.

# Let's try Zig

The benchmarks report these times for Iterative Fibonacci (N = 1 Billion):

* C: 2.01 seconds
* LOGOS / Rust: 2.15 seconds
* Zig: 2.61 seconds (?)

That smells off, we'd expect Zig to be at parity with C by design. Could it be a bug in the example, or even in the Zig compiler? Let's look at the code:

```zig

// Moved from main to a function for clarity.
fn fib(x: i64) i64 {
    var a: i64 = 0;
    var b: i64 = 1;
    var i: i64 = 0;
    while (i < n) : (i += 1) {
        const temp = b;
        // Preventing overflow again.
        b = @mod(a + b, 1000000007);
        a = temp;
    }
    return b;
}
```

Do you see it? It didn't jump out at me right away, I'm new to Zig.

[@mod](https://ziglang.org/documentation/master/#mod) is modulo, [@rem](https://ziglang.org/documentation/master/#rem) is remainder. They are different for negative numbers, e.g. `@rem(-5, 3) == -2` but `@mod(-5, 3) == 2`. The *semantic* difference doesn't matter here, because we pass in positive numbers. However, since we are using a *signed data type*, `@mod` is actually slightly slower because it has to check.

We can fix the bug by replacing `@mod` with `@rem`, and find that Zig performs at parity C as expected. The benchmark was in error, **LOGOS was slower than Zig, not faster**.

```zig
// Moved from main function for clarity.
fn fib(x: i64) i64 {
    var a: i64 = 0;
    var b: i64 = 1;
    var i: i64 = 0;
    while (i < n) : (i += 1) {
        const temp = b;
        // Preventing overflow with @rem not @mod.
        b = @rem(a + b, 1000000007);
        a = temp;
    }
    return b;
}
```

We can also use unsigned datatypes since we don't need negative numbers. In general, people writing high-performance code *need* control over their data layout including the size and signedness of numeric types. That's one way that LOGOS actively removes Rust features that support performance.

```zig
fn fib(n: u64) u64 {
    var a: u64 = 0;
    var b: u64 = 1;
    var i: u64 = 0;
    while (i < n) : (i += 1) {
        const temp = b;
        b = (a + b) % 1000000007;
        a = temp;
    }
    return a;
}
```

We can also protect from overflow using [saturated addition](https://ziglang.org/documentation/0.10.1/#Runtime-Integer-Values) `+|`, which is simpler and faster than doing an addition followed by a modulo. 

```zig
// Addition then modulo
b = (a + b) % 1000000007;
// Saturated addition, returns max value on overflow
b = a +| b;
```

On my machine, that made the example run *5 times faster* than the original. However, it changes the result because the existing benchmark overflows and computes non-fibonacci numbers with the modulo, so it depends what the goal is. How fast do we need the wrong numbers, and are different wrong numbers OK?

Comparing with Zig's "wrapping add" `+%` and [runtime safety checks](https://ziglang.org/documentation/master/#Illegal-Behavior) is left as an exercise.

# Recursive Fibonacci as a Spec

It's tempting to mirror the mathematical definition of Fibonacci in our code, but we generally shouldn't because it's massively inefficient. For that reason, when I see the LOGOS benchmarks list Recursive Fibonacci as the first example, I wonder what they are actually trying to measure.

I think of the mathematical definition like a *spec*, separate from the implementation. Or perhaps a "reference implementation" to test against the optimized one .

Here's how recursive Fibonacci might look in Zig.

```zig
// Naive recursion. Don't actually do this.
fn fib(n: u64) u64 {
    if (n < 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
```

You can see how much slower this approach is because the benchmarks use `N = 40` but used *one billion* on the iterative version. In [Algorithmic Analysis](https://cs.pomona.edu/classes/cs62/history/bigO/), we'd say that the naively recursive version has exponential time and our iterative examples had linear time.

We'll go through the motions on optimizing this even though the purpose is unclear. LOGOS achieves speedup by doing roughly the same as this Zig:

```zig
// 
var hash_memo: std.AutoHashMap(i64, i64) = undefined;

// In main:
// hash_memo = .init(init.gpa);
// defer hash_memo.deinit();
 
fn fib(n: i64) std.mem.Allocator.Error!i64 {
    if (n < 2) return @max(n, 0);
    if (hash_memo.get(n)) |cached| return cached;
    const a = try fib(n - 1);
    const b = try fib(n - 2);
    const result = a + b;

    try hash_memo.put(n, result);
    return result;
}
```

[Memoization](https://blog.racket-lang.org/2012/08/dynamic-programming-versus-memoization.html) is a type of caching, like a lookup table. The term was coined by Donald Michie in 1968. That's according to [Peter Norvig's 1991 paper](https://aclanthology.org/J91-1004/), which introduces automated memoization. Norvig had a lot of [great ideas](https://www.norvig.com/), he wrote the AI textbook we used in college.

When you implement an optimization in a compiler, you need to be aware of the design tradeoffs. The LOGOS compiler performs automated memoization to show speedup. However, the reason that's "new" is it's just not useful for a general-purpose compiler to do that. There are too many choices to make about when and how to cache, it's better left to the programmer. Should we use an array instead of a hashmap because our keys are sequential numbers? What kind of key should we use? How should expiration work? It depends, and if you care about performance, you don't want the compiler improvising these points for you.

If you *must* make it even more convenient to cache things, we can use [libraries and annotations](https://docs.python.org/3/library/functools.html). That's similar to what Norvig's paper did using Lisp conveniences.

By the way, if we're just going to substitute closed-form solutions like some of the entries do, there happens to be [Binet's formula](https://artofproblemsolving.com/wiki/index.php/Binet%27s_Formula) for Fibonacci. We can compute it in about 5 nanoseconds.

```zig
const sqrt5: f64 = @sqrt(@as(f64, 5.0));
const phi: f64 = (1.0 + sqrt5) / 2.0;// Golden ratio
const max_exact_n = 75; // Works for f64 precision.

pub fn fib(n: u32) u128 {
    std.debug.assert(n <= max_exact_n);
    return @intFromFloat(@round(powi(phi, n) / sqrt5));
}
```

Wow, Zig is fast!

# Less naive recursion

My functional programming roots would never let me tell you how *not* to use recursion without showing better ways.

Moving from double recursion to single recursion would be a great start, there's no longer an exponential number of redundant computations. The next thing to look for is *where* the recursive call lives.

A [tail call](https://en.wikipedia.org/wiki/Tail_call) is when the *last* thing a function does is return the result of some function. When the call is the function calling itself, it's tail recursion. A common pattern to enable this is to add a helper function which takes an extra argument called an accumulator.

```zig
fn fibAcc(n: u64, a: u64, b: u64) u64 {
    if (n == 0) return acc;
    return fibAcc(n - 1, b, a + b);
}

fn fib(n: u64) u64 {
    return fibAcc(n, 0, 1);
}
```

This now performs at parity with the iterative version. That's because Zig performs *tail-call elimination*, an optimization that transforms this into a loop so we don't grow the call stack. We've been talking about time, but space efficiency is also a factor with these long chains of function calls. The call stack can even hit a limit, hence the term [Stack Overflow](https://blog.codinghorror.com/introducing-stackoverflow-com/).

For these reasons, I often worry about taking advantage of tail call optimization. What if I restructure the code later, or the optimization conditions change in a compiler upgrade? My code would just silently get slower. I always wish I could declare that I *depend* on an optimization so that missing it would become an error.

It turns out Zig has that too!

```zig
fn fibAcc(n: u64, a: u64, b: u64) u64 {
    if (n == 0) return a;
    // Ensure tail call optimization. 
    return @call(.always_tail, fibAcc, .{ n - 1, b, a + b });
}

fn fib(n: u64) u64 {
    return fibAcc(n, 0, 1);
}
```

Back in 2007, I tried to introduce a new term for tail calls, "booty calls". It didn't catch on. 

# Shifting the burden

People always want to tell me what agents *might have done* when I'm discussing what's actually happening. The distinction is important.

Today's coding agents are of course capable of catching various problems with these benchmarks. I tried it, you can too. The question is **why didn't they**? [Agentic Review](https://www.oreilly.com/radar/agentic-code-review/) kinda works, but LOGOS' 3 Max subscriptions didn't do it on their own.

So what actually happened? The user had the option to confirm their claims, but they decided to print them on snazzy pamphlets instead. As a result, if we're going to know what's actually going on, it falls on someone like me to *foolishly* spend hours vetting stuff that was obviously sketchy from the get go. To quote my inner monologue:

> Why am I doing this? Is this masochism? I might have a problem. I'm not OK.

Anyway... it's easy to see why Zig [opted out of the game](https://kristoff.it/blog/contributor-poker-and-ai/). So did Codeberg in their [recent majority vote](https://blog.codeberg.org/protecting-our-floss-commons-from-llms.html). Quoting the latter, you'll notice some common threads.

> Maintainers are under an increased work-load due to people submitting (often well-meaning) low-effort, LLM-generated contributions that require substantial amounts of time to review.
> 
> \[...]
> these forces make collaboration not only harder but also less rewarding: With the transaction cost of collaboration increasing, people are becoming less likely to contribute to creating high-quality software projects and more likely to 'vibecode' a one-off software that is specific to your need, and won't evolve beyond. We get a vicious cycle where collaboration is becoming less and less rewarding, while the amount of single-use software that's unmaintained and never sees any improvements is going up.

I've talked to people who don't like these decisions. That's understandable, it's like a breakup when you'd rather mend the relationship. If it can go better, let's make it go better. Find ways to address the dysfunction. Promote tech and norms that enable collaboration rather than sabotage it.

At bare minimum, **if people want to opt out, let them**. *Respect [boundaries](https://www.youtube.com/watch?v=9WuikEKhGcw)*. That's so easy and so helpful right now.

# Update

The LOGOS author has taken this post [in good cheer](https://www.linkedin.com/posts/cadrlife_i-need-a-favor-dont-read-my-new-blog-share-7492429366841200641-R5EH) and asked their chatbot to review it.

![Claude Code reading this post to try and fix the compiler](/images/posts/fib/chatbot-reads-blog.png)

> ❤️ ragebaiting works! Thanks for all these lovely things to go iterate and fix. I knew I could count on others to do hard work for me finding flaws. Work smarter not harder!

They have acknowledge some surface-level errors but seem less aware of the underlying points, possibly related to my dense and satirical prose style. There are [layers](https://en.wikipedia.org/wiki/Tiramisu) to this. We're "zooming in and out" to make systemic points. [Systems are hard](https://www.youtube.com/watch?v=xwepeGJ_u54).

This is an article about community dynamics. The critique of LOGOS is just a jumping-off point. Nonetheless, the critique is there and it's not shallow.

Let's connect the dots:

* The examples I zoomed in on were not random, there were natural double-clicking on the first claims presented.
  * Fastest language in the world
  * "LOGOS > Zig" pamphlet
  * The website's benchmark page
  * First listed example, recursive Fibonacci, and its iterative partner
* When the first evidence for the first claim is dubious, it undermines trust.
* Looking at the totality of other examples that show speedup, I did not see evidence of a useful optimizing compiler.
* I note design choices that are likely to undermine performance in practice.
* Taken together, these are red flags suggesting inability to reason about or communicate these kinds of engineering decisions.
* Surveying the other language features, I describe a "hodge-podge" of cool ideas with no clear audience or value proposition.

Hope that helps.

# Nothing happens in a vacuum

**We are being manipulated**. We expect users to know that agents aren't accountable. *Of course* they can't replace your own decision-making. It seems so obvious. Meanwhile, CEOs chasing [trillions](https://timesofindia.indiatimes.com/technology/tech-news/after-months-of-ai-doomsday-warnings-from-ceo-dario-amodei-claude-maker-anthropic-quietly-files-for-trillion-dollar-ipo/articleshow/131479870.cms) of investment dollars brand them:

* [AI Software Engineers](https://youtu.be/jhkY_BUDVcU)
* Coworkers
* Teams
* Virtual Employees
* Superintelligence
* [A country of geniuses in a datacenter](https://darioamodei.com/essay/machines-of-loving-grace), or whatever

Manipulation breeds conflict. There's room to give grace and realize these are confusing times.

# Conclusion

> Every once in a while, declare peace. It confuses the hell out of your enemies.
>
> -- <cite>[Rule of acquisition 76](https://memory-alpha.fandom.com/wiki/Rules_of_Acquisition)</cite>

Why are we turning against each other? We are peers. Everyone I've addressed, from Jarred to Andrew to Linus, we all want the same things.

This is the third in my series of exploratory writing on the surreal conflicts we experience in the AI gold rush. The first two were:

* [Zig Creator Calls Spade a Spade, Anthropic Blows Smoke](https://raymyers.org/post/zig-creator-calls-spade-a-spade/)
* [Why Linus is Right and AI is Wrong](https://raymyers.org/post/zig-creator-calls-spade-a-spade/)

I'm glad that some people have found this helpful. Maybe [redicule is praxis](https://www.404media.co/ridicule-as-praxis-with-emily-bender-and-alex-hanna/), as Emily Bender says. Maybe it's just catharsis. Both are needed. Either way, I don't want to let myself become defined by opposition.

Loris Cro illustrates how to turn a negative reaction into a positive mission. In his 2021 piece [Playing the Open Source Game](https://kristoff.it/blog/the-open-source-game), he didn't just say why software sucks. He coined the term [Software You Can Love](https://softwareyoucan.love/), which became its own conference - the next one is October in Vancouver.

Similarly, I founded [The Coding Agency](https://www.thecodingagency.org/) to pivot the conversation from "agents" to the positive property of human agency. Many others have done the same.

Dario, I declare peace. Drinks on me if you ever want to stop [eviscerating global decision-making](https://hermit-tech.com/blog/ai-mania-is-eviscerating-global-decisionmaking).

It is written in the Tao Te Ching that your greatest treasures are simplicity, patience, and compassion.

> There is no greater misfortune
> than underestimating your enemy.
> Underestimating your enemy
> means thinking that he is evil.
> Thus you destroy your three treasures
> and become an enemy yourself.
>
> When two great forces oppose each other,
> the victory will go
> to the one that knows how to yield.
>
> -- <cite>Tao Te Ching, Stephen Michell version. [Ursula K Le Guin's](https://github.com/nrrb/tao-te-ching/blob/master/Ursula%20K%20Le%20Guin.md) is also nice.</cite>

With patience, the most tangled cord may be undone.

Thank you.


---
