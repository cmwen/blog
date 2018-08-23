---
path: "/thoughts-about-productivity"
date: "2018-08-08T22:38:22.164Z"
title: "Thoughts About Productivity"
tags: ["productivity"]
---

# Thoughts About Productivity

## Distrative

Spot any steps in thw workflow that could easily distract from your work. For example, a developer might occarually run an end to end test. This e2e srcipts need few steps to complete. 
1. install dependencies
2. update webdriver
3. start webdriver
4. run the test scripts
The steps might look simple and easy to follow. But to an ordanary developer like myself, can only vaguely remember how to do this few weeks later. So what ends up is, I alwasy need to check the README or whatever that document the process. This is a distraction. A distraction will end up lots of mental cost, including context switching.
A developer might developing a feature and just want to know wheather his code will pass the e2e tests, but now he has forced to switch context to learn how to run the tests again.
If these steps can be run in a single command, like `npm run e2e-test`, then it is a way better improvement in terms of distraction. A single command is way easy to remember than a sequnce of commands.

Scripting all simple process if possible.


