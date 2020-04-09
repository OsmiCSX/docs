# Release Notes
What's new in the latest version of OsmiCSX?

## OsmiCSX v0.4.0
Current stable version of OsmiCSX with useful features~!

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

## OsmiCSX v0.3.2
### Add new `OsmiProvider`
OsmiProvider is a new method to config the custom style / theme like adding custom namespace. And also in OsmiProvider we simplify the styling concept.

We also move `apply` method to OsmiProvider and add new `connect` method for templating style.

### Update Project Structure
Just move some file to another folder

### Simplify Styling Concept
We're more simplify the styling concept, for the templating style by removing the apply method. Now you just need to use multiple namespace in the array.

### `deprecated` some Method
In this release, we've been added OsmiProvider which will replace several method like the default method and family method.

## OsmiCSX v0.2.0
- Fix minor bugs
- Refactor `flexDirection` namespace
- Add more border style
- Update official documentation
