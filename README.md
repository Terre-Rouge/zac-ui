# ZAC-UI

An accessible react components library developped with tailwindcss.

## Goals

- Focused on E-Commerce websites
- Accessibility: Implementing [WAI-ARIA](https://www.w3.org/TR/wai-aria-practices/)
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- Highly customisable

## Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [tailwindcss](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [rollup.js](https://rollupjs.org/)

## Inspired by

- [Reach UI](https://reach.tech/)
- [Storefront UI](https://www.storefrontui.io/)

## Installation

### Install package

```
yarn add zac-ui
```

### Import component

```
import { Button } from 'zac-ui'
...
<Button primary size="large">
    My Button
</Button>
```

### Import style (preset tailwind configuration)

```
// tailwind.config.js
module.exports = {
  presets: [require('zac-ui/preset')],
  ...
```
