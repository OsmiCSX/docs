---
title: Core Concept
lang: id-ID
---
## Single Style
Give a single style directly to the element by using default styles from `osmicsx`.
```jsx harmony
import React from 'react'
import { View, Text } from 'react-native'
import styles from 'osmicsx'

const App = props => {
  return (
    <View style={styles("flex")}>
      <Text style={styles("text-white")}>Hello World!</Text>
    </View>
  )
} 
```

## Inline Style
Style directly to the element without separately. Just import from `osmicsx` and use it
```jsx harmony
import React from 'react'
import { View, Text } from 'react-native'
import styles from 'osmicsx'

const App = props => {
  return (
    <View style={styles([
      "flex", 
      "bg-gray-800", 
      "items-center", 
      "justify-center"
    ])}>
      <Text style={styles([
        "text-white", 
        "text-xl", 
        "text-center"])}>Hello World!</Text>
    </View>
  )
} 
```

## Templating Style
**`apply()`** method can be used in style file for better structure and customize style.
```jsx harmony
import { StyleSheet } from 'react-native'
import { apply } from 'osmicsx'

export default StyleSheet.create({
  container: apply([
    "flex",
    "bg-gray-600",
    "items-center",
    "justify-center",
    { height: 100 } // your custom style as an object
  ]),
  title: apply([
    "text-white",
    "text-center",
    "text-2xl"
  ])
})
```

## Colors Extracted
We aware that you want to use the color only without any style, we also extract the color so you can call it anywhere.
```jsx harmony
import React from 'react'
import { StatusBar, View, Text } from 'react-native'
import styles, { colors } from 'osmicsx'

const App = props => {
  return (
    <View style={styles([
      "flex", 
      "bg-gray-800", 
      "items-center", 
      "justify-center"
    ])}>
       <StatusBar backgroundColor={colors["bg-gray-900"]} barStyle="light-content" />

      <Text style={styles([
        "text-white", 
        "text-xl", 
        "text-center"])}>Hello World!</Text>
    </View>
  )
} 
```

## Custom Font Family
We currently still not support any custom style file, so to solve that problem we provie helper method **`family()`** to custom font family text. But before cutomize the font family, you must link the font asset into your project first.
```jsx harmony
import { StyleSheet } from 'react-native'
import { apply } from 'osmicsx'

export default StyleSheet.create({
  container: apply([
    "flex",
    "bg-gray-600",
    "items-center",
    "justify-center"
  ]),
  title: apply([
    "text-white",
    "text-center",
    "text-2xl",
    family("Roboto-Medium") // Font Family Name
  ])
})
```
