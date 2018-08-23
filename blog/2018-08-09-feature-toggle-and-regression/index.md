---
path: "/feature-toggle-and-regression"
date: "2018-08-09T21:12:26.441Z"
title: "Feature Toggle And Regression"
tags: ["dry", "feature-toogle", "regression"]
---

# Feature Toggle And Regression

It is OK to violate DRY principls to copy the code when working on a new feature that is high couple to old behaviour.

As a professional software engineer, I kind of strickly obey the DRY principals, and don't want to introduce any regression. But this could end up you can not easily to write a clean code and refactor. You need to branch your code in the exisitng code base. 

Copy the exisitng code will ease your regresion nightmare. Once toggle is removed, the old code will disappear, so you are not violating DRY prinsipal any more. But you need to make sure the toggle will be removed and old behaviour will not needed. Otherwise, you could put yourself in a situation that DRY try to address, maintain multiple codes that basically indentical.

