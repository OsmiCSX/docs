---
title: Introduction
lang: id-ID
---
# Introduction
## What is OsmiCSX ?
OsmiCSX is a utility React Native style framework for rapidly building custom user interfaces. We adopted the Tailwind concept and implement it for styling in React Native. OsmiCSX designed for customizing UI in React Native and makes a reusable component with the style as you want with very simple code.

## Why OsmiCSX ?
Most Style/UI framework in React Native only focused on the UI Component and not really customizable. They come with all sorts of predesigned components like buttons, cards, and alerts that might help you move quickly at first, but cause more pain than they cure when it comes time to make your site stand out with a custom design.

OsmiCSX is different.

Instead of opinionated predesigned components, OsmiCSX provides low-level utility style that let you build completely custom designs.

```jsx harmony
import React, { Component } from 'react'
import { StatusBar, View, Text } from 'react-native'
import { apply } from 'osmicsx'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <View style={apply("flex items-center justify-center")}>
        <Text style={apply("text-white text-center text-2xl")}>Hello World!</Text>
      </View>
    )
  }
}
```

## Templating Friendly
While you can do a lot with just utility classes, as a project grows it can be useful to codify common patterns into higher level abstractions.

OsmiCSX provides tools for extracting component classes from repeated utility patterns, making it easy to update multiple instances of a component from one place:
```jsx harmony
import { connect } from '../lib/OsmiConfig' // your osmi config path

export default connect({
  container: "bg-blue-500 p-2 pl-5 pr-5 rounded",
  text: "text-white text-base font-bold text-center"
})
```

## Customizable
we really know that everyone has their own style, so we've been added new feaature `OsmiProvider` to realize it. Please look at OsmiProvider for more detail.

```jsx harmony
import customTheme from '../assets/custom-theme'
import { OsmiProvider } from 'osmicsx'

const provider = new OsmiProvider(customTheme);

const { apply, connect } = provider;

export {
  apply,
  connect
}
```
