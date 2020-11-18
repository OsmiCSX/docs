---
title: OsmiProvider
lang: id-ID
---
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

## connect() Method
`connect()` is new method helper in the OsmiProvider, it will provide a convert algorithm to convert an array to be `StyleSheet` react native object. Use this method in templating style
```jsx harmony
import { connect } from '../lib/OsmiConfig' // your osmi config path

export default connect({
  container: "bg-blue-500 p-2 pl-5 pr-5 rounded",
  text: "text-white text-base font-bold text-center"
})
```

## apply() Method
We're moving `apply()` method to OsmiProvider too. So you can apply your custom namespace style
```jsx harmony
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { apply } from '../lib/OsmiConfig' // your osmi config path

const button = props => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={apply('bg-blue-500 p-2 px-5 rounded')}>
      <Text style={apply('text-white text-base font-bold text-center')}>Button</Text>
    </TouchableOpacity>
  )
}

export default button
```

## Example
You need to declare the `OsmiProvider` firt before use it. Here's the example
<div data-snack-id="@devoresyah/osmiprovider-example" data-snack-platform="android" data-snack-preview="true" data-snack-theme="light" style="overflow:hidden;background:#fafafa;border:1px solid rgba(0,0,0,.08);border-radius:4px;height:505px;width:100%"></div>
<script async src="https://snack.expo.io/embed.js"></script>
