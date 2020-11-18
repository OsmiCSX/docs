# Release Notes
What's new in the latest version of OsmiCSX?

## OsmiCSX v0.5.1
### Responsive Implementation for Width, Height, and Font Size
Actually, we already have a responsive module since 0.5.0. But we realize that the implementation of the responsive module still hard. Now we inject it into `apply()` and `connect()` ecosystem.

### Responsive Width based on Window Dimensions Width
Example:
```jsx harmony
import { apply } from 'osmicsx'

const Button = props => {
  return (
    <View style={apply('w/90 bg-blue-500 self-center')}>
      <Text style={apply('text-white text/5 font-medium')}>Button</Text>
    </View>
  )
}
```
- `w/90` will return 90% width of the window width
- `text/5` will return 5% of the window width

### Responsive Height based on Window Dimensions Height
Example:
```jsx harmony
import { apply } from 'osmicsx'

const Button = props => {
  return (
    <View style={apply('w/50 h/50 bg-blue-500 self-center items-center justify-center')}>
      <Text style={apply('text-white text/5 font-medium text-center')}>Hello World!</Text>
    </View>
  )
}
```
- `w/50` will return 50% width of the window width
- `h/50` will return 50% height of the window height
- `text/5` will return 5% of the window width

### Responsive Font Size based on Window Dimensions Height
Example:
```jsx harmony
import { apply } from 'osmicsx'

const Title = props => {
  return (
    <Text style={apply('text-white text/8 font-medium text-center')}>Hello World!</Text>
  )
}
```
- `text/8` will return 5% of the window width

## OsmiCSX v0.5.0
### Update algorithm for apply() method
Previously, **`apply()`** method need to use multiple params. Now, we gonna migrate to _space separator_ instead of array params.

**before**
```jsx harmony
apply("flex", "items-center", "justify-center")
```
**after**
```jsx harmony
apply("flex items-center justify-center")
```

### Update connect() method algorithm
**`connect()`** algorithm also have an update. We also want to use _space separator_ on **`connect()`** method. We think that it will easier and more simple.

**before**
```jsx harmony
export default connect({
    container: [
        "flex",
        "items-center",
        "justify-center",
    ],
    title: [
        "text-lg",
        "text-center",
        "text-black",
        "font-bold"
    ]
})
```
**after**
```jsx harmony
export default connect({
    container: "flex items-center justify-center",
    title: "text-lg text-center text-black font-bold"
})
```

### Colors support in apply() method
Adding support to call any colors with **`apply()`** method. So, you don't need to use any colors extractor again

**before**
```jsx harmony
colors["red-500"]
```
**after**
```jsx harmony
apply("red-500")
```

### Update scaling method & responsive text
We receive that community want's something like automatically resize the text scale depends on the device resolution. So we take a look on `react-native-responsive-screen` dependency and implement it on OsmiCSX. It also effects to the previous `scale` method.

## OsmiCSX v0.4.0
### Remove `family()` helper method
**_`family()`_** helper method has been deprecated in this version. Please set up your custom font family on **`OsmiProvider`**

### Remove `default` helper method
**_`default`_** helper method has been deprecated in this version. You cannot use import default anymore, please use **`apply()`** helper method instead.

### Update `apply()` helper method algorithm
**_`apply()`_** helper method now has a new algorithm, instead of using array when call the method. Now you just need to write multiple namespaces on method params.

**before**
```
apply(["flex", "items-center", "justify-center"])
```

**after:**
```
apply("flex", "items-center", "justify-center")
```

## OsmiCSX v0.3.3
### Fix minor bugs Border Width
### Add colors to provider
