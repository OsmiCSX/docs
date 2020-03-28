---
title: Getting Started
lang: id-ID
---
# Installation
Quick start guide for installing OsmiCSX. You need install OsmiCSX on your project directory.

## Installation via npm
```
npm install osmicsx
```

## Installation via Yarn
```
yarn add osmicsx
```

## Usage
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
