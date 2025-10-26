---
title: C++ Gets Worse Every Year
slug: cpp-worse-every-year
description: We don't need your stinking Cargo
tags:
  - technical
  - learning
  - musings
added: 2025-10-26T12:55:51.831Z
---

I heard recently that Rust makes you "fight the compiler", unlike C++.

Anyway, time to bootstrap a single-dependency C++ project. This should be a walk in the park, since the dependency I need is well-maintained and has a polished build process. A 300 line [Bash script](https://github.com/rose-compiler/rose/blob/weekly/build) called `build` generates a 67,000 line Bash script called `configure`, which generates a Makefile, which allegedly builds something. The Unix philosophy at its finest.

Those Rustaceans would have you endlessly fight the compiler by running some arcane incantation like:

\> cargo build

So restrictive. Clearly some blue-haired hipster nonsense. We have no time for that. Fortunately, C++ allows you full freedom!

Simply:

1. clone the dependency
2. Set it up as a git submodule
3. run build.sh (fail)
4. install libtool
5. build.sh again (fail)
6. install autoconf
7. run build.sh again (fail)
8. install autoconf
9. run build.sh (success)
10. run configure script (fail)
11. install boost
12. run configure script (fail)
13. add arg --with-boost=/opt/homebrew/Cellar/boost/1.89.0/include/boost
14. run configure script (fail)
15. change arg to --with-boost=/opt/homebrew/Cellar/boost/1.89.0/include
16. set LD\_LIBRARY\_PATH
17. run configure script (fail)
18. unset LD\_LIBRARY\_PATH
19. scroll through several hundred lines of config.log
20. Notice a double "include" dir in path: /opt/homebrew/Cellar/boost/1.89.0/include/include/boost/version.hpp
21. change arg to --with-boost=/opt/homebrew/Cellar/boost/1.89.0
22. run configure script (success)
23. make (fail)
24. install newer bison
25. set new bison on path
26. make (... wait 10 minutes, fail)
27. install wget
28. make (fail)
29. read more logs, a lib being downloading is specific to a GCC version.
30. change GCC version... it's an alias to clang
31. install GCC
32. alias gcc=gcc-15
33. make clean && make (fail)
34. set CC and CXX env vars.
35. make clean && configure && make
36. Discover that the lib being downloaded is not available for your architecture.
37. Resolve to try again on another machine someday.

If you ever get your project to build, you may someday want others to see it. This too is simple! Just hastily scrawl some notes about how it you got it working on your machine. You can rest assured that if anyone else fails to get it working, it is Their Fault (tm). Skill Issue.

Remember, in C++, the user is always to blame.
