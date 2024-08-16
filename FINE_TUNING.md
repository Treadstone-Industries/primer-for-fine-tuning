# Fine tuning

## Overview

This repo is a fork of [primer/react](https://github.com/primer/react) with a few new additional components to prove the efficacy of fine-tuning.

To do test the efficacy, do a before and after test. For the before, create a new repo wit a new React file with

```tsx
import React from 'react'

export function MyComponent() {
  return <St
}
```

Continue typing `StarkPatentTracker` (one of the new components) and on each character, wait for the completion. Then, change models to the new fine-tuned version and repeat.

## New Components

- `<AvengersList />`
- `<NotificationBell />`
- `<StarkPatentTracker />`
