---
path: "/looking-at-the-root-problem"
date: "2018-08-09T06:34:51.232Z"
title: "Looking At The Root Problem"
tags: ["probelm solving"]
---

# Looking At The Root Problem

Sometime when we are working on a hard problem, we will kind of stuck in the middle and found lots of hacky way to overcome the problem. But lots of time, the solution is not perfect and you need to keep coming back cause sometime it simply doesn't work. Sometimes, you need to look at the big picture, it might solve the problem entirely.

Here is an example, the product I am working on has to support i18n. Means need to support multiple languages. The problem we have is we don't know when we will recieve the translations. If the translation doesn't come back by the time we ship our code, user will see some missing string when viewing in the languages other then English.

To overcome this problem, we come up with an idea by adding fallback logic in our code base. If user is not viewing English, then we inject the missing translation in English. This works well, but it is time consuming. Adding the fallback logic is time consuming, removing the logic when translation came back is time consuming too.

By looking at the problem again, we found we can simply using webpack plugin to merge the translation file, all the missing string in the translation files will be replace with English string. This only took me few hours to implement, but the on going cost of adding and removing fallback logic is uncountable.
