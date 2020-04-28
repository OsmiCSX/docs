---
title: Typography
lang: id-ID
---
## Font Family
Utilities for controlling the font family of an element. In OsmiCSX we provide a method called **`family()`** to change the font family, but you need to link your font asset first and call the font name.
```jsx harmony
import { StyleSheet } from 'react-native'
import { apply, family } from 'osmicsx'

export default StyleSheet.create({
  title: apply([
    "text-white",
    "text-lg",
    family("Roboto-Medium")
  ])
})
```

## Font Size
Utilities for controlling the font size of an element.
Namespace | Output
--------- | ------
**text-xs** | `{ fontSize: 12 }`
**text-sm** | `{ fontSize: 14 }`
**text-base** | `{ fontSize: 16 }`
**text-lg** | `{ fontSize: 18 }`
**text-xl** | `{ fontSize: 20 }`
**text-2xl** | `{ fontSize: 22 }`
**text-3xl** | `{ fontSize: 24}`
**text-4xl** | `{ fontSize: 26}`
**text-5xl** | `{ fontSize: 28}`
**text-6xl** | `{ fontSize: 30}`

## Responsive Font Size
Utilities for controlling the font size of an element with automatically resize depends on device resolution.
Namespace | Description
--------- | -----------
**text-r-xs** | Responsive version for `text-xs`
**text-r-sm** | Responsive version for `text-sm`
**text-r-base** | Responsive version for `text-base`
**text-r-lg** | Responsive version for `text-lg`
**text-r-xl** | Responsive version for `text-xl`
**text-r-2xl** | Responsive version for `text-2xl`
**text-r-3xl** | Responsive version for `text-3xl`
**text-r-4xl** | Responsive version for `text-4xl`
**text-r-5xl** | Responsive version for `text-5xl`
**text-r-6xl** | Responsive version for `text-6xl`

## Font Style
Utilities for controlling the style of text and font weight.
Namespace | Output
--------- | ------
**italic** | `{ fontStyle: "italic" }`
**underline** | `{ textDecorationLine: "underline" }`
**line-through** | `{ textDecorationLine: "line-through" }`
**no-underline** | `{ textDecorationLine: "none" }`
**font-hairline** | `{ fontWeight: "100" }`
**font-thin** | `{ fontWeight: "200" }`
**font-light** | `{ fontWeight: "300" }`
**font-normal** | `{ fontWeight: "400" }`
**font-medium** | `{ fontWeight: "500" }`
**font-semibold** | `{ fontWeight: "600" }`
**font-bold** | `{ fontWeight: "700" }`
**font-extrabold** | `{ fontWeight: "800" }`
**font-black** | `{ fontWeight: "900" }`

## Letter Spacing
Utilities for controlling the tracking (letter spacing) of an element.
Namespace | Output
--------- | ------
**tracking-tighter** | `{ letterSpacing: -0.8 }`
**tracking-tight** | `{ letterSpacing: -0.4 }`
**tracking-normal** | `{ letterSpacing: 0 }`
**tracking-wide** | `{ letterSpacing: 0.4 }`
**tracking-wider** | `{ letterSpacing: 0.8 }`
**tracking-widest** | `{ letterSpacing: 1.6 }`

## Line Height
Utilities for controlling the leading (line height) of an element.
Namespace | Output
--------- | ------
**leading-none** | `{ lineHeight: 1 }`
**leading-tight** | `{ lineHeight: 1.25 }`
**leading-snug** | `{ lineHeight: 1.375 }`
**leading-normal** | `{ lineHeight: 1.5 }`
**leading-relaxed** | `{ lineHeight: 1.625 }`
**leading-loose** | `{ lineHeight: 2 }`
**leading-3** | `{ lineHeight: 12 }`
**leading-4** | `{ lineHeight: 16 }`
**leading-5** | `{ lineHeight: 20 }`
**leading-6** | `{ lineHeight: 24 }`
**leading-7** | `{ lineHeight: 28 }`
**leading-8** | `{ lineHeight: 32 }`
**leading-9** | `{ lineHeight: 36 }`
**leading-10** | `{ lineHeight: 40 }`

## Text Align
Utilities for controlling the alignment of text.
Namespace | Output
--------- | ------
**text-left** | `{ textAlign: "left" }`
**text-center** | `{ textAlign: "center" }`
**text-right** | `{ textAlign: "right" }`
**text-justify** | `{ textAlign: "justify" }`

## Text Color
Utilities for controlling the text color of an element.
Namespace | Output
--------- | ------
**text-transparent** | `{ color: colors.transparent }`
**text-black** | `{ color: colors.black }`
**text-white** | `{ color: colors.white }`
**text-gray-100** | `{ color: colors["gray-100"] }`
**text-gray-200** | `{ color: colors["gray-200"] }`
**text-gray-300** | `{ color: colors["gray-300"] }`
**text-gray-400** | `{ color: colors["gray-400"] }`
**text-gray-500** | `{ color: colors["gray-500"] }`
**text-gray-600** | `{ color: colors["gray-600"] }`
**text-gray-700** | `{ color: colors["gray-700"] }`
**text-gray-800** | `{ color: colors["gray-800"] }`
**text-gray-900** | `{ color: colors["gray-900"] }`
**text-red-100** | `{ color: colors["red-100"] }`
**text-red-200** | `{ color: colors["red-200"] }`
**text-red-300** | `{ color: colors["red-300"] }`
**text-red-400** | `{ color: colors["red-400"] }`
**text-red-500** | `{ color: colors["red-500"] }`
**text-red-600** | `{ color: colors["red-600"] }`
**text-red-700** | `{ color: colors["red-700"] }`
**text-red-800** | `{ color: colors["red-800"] }`
**text-red-900** | `{ color: colors["red-900"] }`
**text-orange-100** | `{ color: colors["orange-100"] }`
**text-orange-200** | `{ color: colors["orange-200"] }`
**text-orange-300** | `{ color: colors["orange-300"] }`
**text-orange-400** | `{ color: colors["orange-400"] }`
**text-orange-500** | `{ color: colors["orange-500"] }`
**text-orange-600** | `{ color: colors["orange-600"] }`
**text-orange-700** | `{ color: colors["orange-700"] }`
**text-orange-800** | `{ color: colors["orange-800"] }`
**text-orange-900** | `{ color: colors["orange-900"] }`
**text-yellow-100** | `{ color: colors["yellow-100"] }`
**text-yellow-200** | `{ color: colors["yellow-200"] }`
**text-yellow-300** | `{ color: colors["yellow-300"] }`
**text-yellow-400** | `{ color: colors["yellow-400"] }`
**text-yellow-500** | `{ color: colors["yellow-500"] }`
**text-yellow-600** | `{ color: colors["yellow-600"] }`
**text-yellow-700** | `{ color: colors["yellow-700"] }`
**text-yellow-800** | `{ color: colors["yellow-800"] }`
**text-yellow-900** | `{ color: colors["yellow-900"] }`
**text-green-100** | `{ color: colors["green-100"] }`
**text-green-200** | `{ color: colors["green-200"] }`
**text-green-300** | `{ color: colors["green-300"] }`
**text-green-400** | `{ color: colors["green-400"] }`
**text-green-500** | `{ color: colors["green-500"] }`
**text-green-600** | `{ color: colors["green-600"] }`
**text-green-700** | `{ color: colors["green-700"] }`
**text-green-800** | `{ color: colors["green-800"] }`
**text-green-900** | `{ color: colors["green-900"] }`
**text-teal-100** | `{ color: colors["teal-100"] }`
**text-teal-200** | `{ color: colors["teal-200"] }`
**text-teal-300** | `{ color: colors["teal-300"] }`
**text-teal-400** | `{ color: colors["teal-400"] }`
**text-teal-500** | `{ color: colors["teal-500"] }`
**text-teal-600** | `{ color: colors["teal-600"] }`
**text-teal-700** | `{ color: colors["teal-700"] }`
**text-teal-800** | `{ color: colors["teal-800"] }`
**text-teal-900** | `{ color: colors["teal-900"] }`
**text-blue-100** | `{ color: colors["blue-100"] }`
**text-blue-200** | `{ color: colors["blue-200"] }`
**text-blue-300** | `{ color: colors["blue-300"] }`
**text-blue-400** | `{ color: colors["blue-400"] }`
**text-blue-500** | `{ color: colors["blue-500"] }`
**text-blue-600** | `{ color: colors["blue-600"] }`
**text-blue-700** | `{ color: colors["blue-700"] }`
**text-blue-800** | `{ color: colors["blue-800"] }`
**text-blue-900** | `{ color: colors["blue-900"] }`
**text-indigo-100** | `{ color: colors["indigo-100"] }`
**text-indigo-200** | `{ color: colors["indigo-200"] }`
**text-indigo-300** | `{ color: colors["indigo-300"] }`
**text-indigo-400** | `{ color: colors["indigo-400"] }`
**text-indigo-500** | `{ color: colors["indigo-500"] }`
**text-indigo-600** | `{ color: colors["indigo-600"] }`
**text-indigo-700** | `{ color: colors["indigo-700"] }`
**text-indigo-800** | `{ color: colors["indigo-800"] }`
**text-indigo-900** | `{ color: colors["indigo-900"] }`
**text-purple-100** | `{ color: colors["purple-100"] }`
**text-purple-200** | `{ color: colors["purple-200"] }`
**text-purple-300** | `{ color: colors["purple-300"] }`
**text-purple-400** | `{ color: colors["purple-400"] }`
**text-purple-500** | `{ color: colors["purple-500"] }`
**text-purple-600** | `{ color: colors["purple-600"] }`
**text-purple-700** | `{ color: colors["purple-700"] }`
**text-purple-800** | `{ color: colors["purple-800"] }`
**text-purple-900** | `{ color: colors["purple-900"] }`
**text-pink-100** | `{ color: colors["pink-100"] }`
**text-pink-200** | `{ color: colors["pink-200"] }`
**text-pink-300** | `{ color: colors["pink-300"] }`
**text-pink-400** | `{ color: colors["pink-400"] }`
**text-pink-500** | `{ color: colors["pink-500"] }`
**text-pink-600** | `{ color: colors["pink-600"] }`
**text-pink-700** | `{ color: colors["pink-700"] }`
**text-pink-800** | `{ color: colors["pink-800"] }`
**text-pink-900** | `{ color: colors["pink-900"] }`

## Text Transform
Utilities for controlling the transformation of text.
Namespace | Output
--------- | ------
**uppercase** | `{ textTransform: "uppercase" }`
**lowercase** | `{ textTransform: "lowercase" }`
**capitalize** | `{ textTransform: "capitalize" }`
**normal-case** | `{ textTransform: "normal-case" }`
