---
path: "/hello-mermaid"
date: "2018-08-06T23:53:19.791Z"
title: "Hello Mermaid"
tags: ["mermaid"]
---

I really like the idea to embed a chart in the makedown with a very simple and readable syntax. And gatsby already have a plugin for it. [gatsby-remark-graph](https://www.gatsbyjs.org/packages/gatsby-remark-graph/)

This is a test chart with mermaid plugin.

```mermaid
graph LR
    A[Start] -- Links To --> B((Circle))
    A --> C(Round Rect)
    B --> D{End}
    C --> D
```

```mermaid
graph LR
    A((Agile)) --> TDD[Test Driven Development]
    A --> CI[Continuous Integration]
    A --> CD[Continuous Delivery]
```
