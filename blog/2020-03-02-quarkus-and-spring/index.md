---
path: "/quarkus-and-spring"
date: "2020-03-02T04:18:56.083Z"
title: "Quarkus And Spring"
tags: ["quarkus", "spring", "microservice", "mircoprofile"]
---

# Quarkus And Spring

I spent few days learning different Micro-service frameworks. The first framework I choose is actually `Micronaut`, but once I start investigating `Micronaut`, I realized one thing that seems important to me. It looks like `Spring`, but it's another `Spring`. Once you locked in the eco-system. it's hard to get out. So I start looking for something that is more standard so I choose `Quarkus`, backed by RedHat that implements `Eclipse MicroProfile`, that should make it relatively easy to port to other platform that also support `MicroProfile`.

The more I use, the more I like it, even it is still a new framework.

Things I like `Quarkus` so far

- Fast. It is faster then Spring. With hot reload, it’s save you lots of waiting time.
- Standard. It support Eclipse MicroProfile, means it uses more standard ways to do things like rest endpoint annotations, dependency injection, openapi …etc.  That also means porting to another platform should be less painful then others.
- Easy to learn. It’s similar to Spring, if you have some Spring background, should be really easy to pick up.
- GraalVM supports. Building native images is build-in, it could significantly reduce the startup time and memory usage.

Things I thing it can improve

- Building with `Gradle` is still in progress. I just hit some known issue and have to switch to Maven.
- IDE support is not as good as Spring. It’s Ok, but still needs a bit of setup in order to get debugger working.
