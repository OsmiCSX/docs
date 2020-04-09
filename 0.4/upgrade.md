---
title: Upgrade
lang: id-ID
---
## From 0.3.3
### default import
Remove all default import method, and use **_`apply()`_** instead.

### family() method
Since `family()` method has been deprecated. Now you can declare your custom font family on `OsmiProvider` then call it on **`connect`** or use `apply()` method.

### apply() method
Remove all `[]` tag on `apply()` method.

**before**
```jsx harmony
apply(["flex", "items-center", "justify-center"])
```

**after**
```jsx harmony
apply("flex", "items-center", "justify-center")
```
