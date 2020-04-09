---
title: Core Concept
lang: id-ID
---
`default import method is deprecated and will be removed in the next OsmiCSX update. Please use OsmiProvider instead`

## apply() Method
Give a single style directly to the element by using default styles from `osmicsx`.
```jsx harmony
import React from 'react'
import { View, Text } from 'react-native'
import { apply } from 'osmicsx'

const App = props => {
  return (
    <View style={apply("flex")}>
      <Text style={apply("text-white")}>Hello World!</Text>
    </View>
  )
} 
```

## Templating Style
**`apply()`** method can be used in style file for better structure and customize style.
```jsx harmony
import { connect } from '../lib/OsmiConfig' // your osmi config path

export default connect({
  container: [
    "bg-blue-500",
    "p-2",
    "pl-5",
    "pr-5",
    "rounded"
  ],
  text: [
    "text-white",
    "text-base",
    "font-bold",
    "text-center"
  ]
})
```

## Colors Extracted
We aware that you want to use the color only without any style, we also extract the color so you can call it anywhere.
```jsx harmony
import React from 'react'
import { StatusBar, View, Text } from 'react-native'
import { apply, colors } from 'osmicsx'

const App = props => {
  return (
    <View style={apply(
      "flex", 
      "bg-gray-800", 
      "items-center", 
      "justify-center"
    )}>
       <StatusBar backgroundColor={colors["bg-gray-900"]} barStyle="light-content" />

      <Text style={apply(
        "text-white", 
        "text-xl", 
        "text-center")}>Hello World!</Text>
    </View>
  )
} 
```
