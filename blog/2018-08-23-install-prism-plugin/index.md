---
path: "/install-prism-plugin"
date: "2018-08-23T12:02:03.913Z"
title: "Install Prism Plugin"
tags: ["gatsbyjs", "prismjs"]
---

# Install Prism Plugin

Prism is a lightweight, extensible syntax highlighter. Gatsby JS comes with a well integrated [plugin](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/?=). Follow the instruction then you can render code snippets in a nice looking way. 

Here is an example. The follwing markdown 

````markdown
```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
````

will become

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```

And we can try some typescript code as well.

```typescript
export interface Person {
    name: string,
    age: number
}

let john = {
    name: "John",
    age: 39
} as Person;
```


