---
title: Transforms
lang: id-ID
---
## Scale
Utilities for scaling elements with transform. We provide 2 helper method to scale **Width** and **Height** depend on the mobile screen.
### scaleWidth
```jsx harmony
import { scaleWidth } from 'osmicsx'

scaleWidth('100%')
```

### scaleHeight
```jsx harmony
import { scaleHeight } from 'osmicsx'

scaleHeight('100%')
```

## Rotate
Utilities for rotating elements with transform.
Namespace | Preview
--------- | ------
**rotate-0** | `{ transform: [{ rotate: "0" }] }`
**rotate-45** | `{ transform: [{ rotate: "45deg" }] }`
**rotate-90** | `{ transform: [{ rotate: "90deg" }] }`
**rotate-180** | `{ transform: [{ rotate: "180deg" }] }`
**-rotate-45** | `{ transform: [{ rotate: "-45deg" }] }`
**-rotate-90** | `{ transform: [{ rotate: "-90deg" }] }`
**-rotate-180** | `{ transform: [{ rotate: "-180deg" }] }`
