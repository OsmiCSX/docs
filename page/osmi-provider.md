---
title: OsmiProvider
lang: id-ID
---
## Introduction
**OsmiProvider** is the provider for customizing namespace. You can add your namespace (_style_) to use in the OsmiCSX, we also more simply styling concept by using OsmiProvider.

It's more easier for you if you choose templating style

**Without OsmiProvider**
```jsx harmony
import { StyleSheet } from 'react-native'
import { apply } from 'osmicsx'

export default StyleSheet.create({
  container: apply([
    "flex",
    "bg-gray-500",
    "items-center",
    "justify-center"
  ]),
  title: apply([
    "text-white",
    "text-2xl",
    "text-center"
  ])
})
```

**With OsmiProvider**
```jsx harmony
import { connect } from '../Lib/OsmiConfig' // Your OsmiProvider path

export default connect({
  container: [
    "flex",
    "bg-gray-500",
    "items-center",
    "justify-center"
  ],
  title: [
    "text-white",
    "text-2xl",
    "text-center"
  ]
})
```

## Setup
### Create custom style file (_optional_)
```jsx harmony
export default {
  "font-regular": { fontFamily: "Roboto" },
  "text-muted": { color: "#fafafa" }
}
```

### Create OsmiProvider config file
```jsx harmony
import customTheme from '../assets/custom-theme' // your custom style file
import { OsmiProvider } from 'osmicsx'

const provider = new OsmiProvider(customTheme);

const { apply, connect } = provider;

export {
  apply,
  connect
}
```

## Usage
After the config complete, now you can import from your config file.
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

## connect()
`connect()` is new method helper in the OsmiProvider, it will provide a convert algorithm to convert an array to be `StyleSheet` react native object. Use this method in templating style
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

## apply()
We're moving `apply()` method to OsmiProvider too. So you can apply your custom namespace style
```jsx harmony
import { StyleSheet } from 'react-native'
import { apply } from '../lib/OsmiConfig' // your osmi config path

export default StyleSheet.create({
  container: apply([
    "bg-blue-500",
    "p-2",
    "pl-5",
    "pr-5",
    "rounded"
  ]),
  text: apply([
     "text-white",
     "text-base",
     "font-bold",
     "text-center"
   ])
})
```

## Example
You need to declare the `OsmiProvider` firt before use it. Here's the example
<div data-snack-id="@devoresyah/osmiprovider-example" data-snack-platform="web" data-snack-preview="true" data-snack-theme="light" style="overflow:hidden;background:#fafafa;border:1px solid rgba(0,0,0,.08);border-radius:4px;height:505px;width:100%"></div>
<script async src="https://snack.expo.io/embed.js"></script>
