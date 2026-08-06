# Goku CSS framework

A small, class-light CSS framework. Styles plain HTML elements, adds a handful of
components and utilities, and stays out of your way. ~5 KB gzipped for everything.

## Getting started

### CDN

No build step — this serves the pre-bundled, minified stylesheet in a single request:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/goku-css">
```

### Package manager

Install with `pnpm add goku-css` (or `npm` / `yarn`), then pick one of:

```js
// Everything, as source files — your bundler inlines the imports
import 'goku-css'

// Pre-bundled and minified, if you'd rather skip that step
import 'goku-css/bundle'

// Or cherry-pick only what you need
import 'goku-css/css/variables.css'
import 'goku-css/css/elements/button.css'
```

The bare `goku-css` entry resolves to the source `css/goku.css` so your bundler can
tree-shake, minify, and apply your own PostCSS/Lightning CSS config. CDNs resolve the
same package name to the pre-built `docs/index.css` instead, since a browser following
a chain of `@import`s would otherwise pay for a request waterfall.

## Development

- `pnpm dev` — docs site with hot reload
- `pnpm build` — rebuild `docs/`
- `pnpm lint` — stylelint
