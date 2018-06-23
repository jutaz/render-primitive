# render-primitive

> Renders JS primitives as text in React

[![NPM](https://img.shields.io/npm/v/render-primitive.svg)](https://www.npmjs.com/package/render-primitive) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save render-primitive
```

## Usage

```jsx
import React, { Component } from 'react'

import RenderPrimitive from 'render-primitive'

class Example extends Component {
  render () {
    return (
      <div>
        {/* Basic usage */}
        <RenderPrimitive>{true}</RenderPrimitive>
        <RenderPrimitive>{false}</RenderPrimitive>
        <RenderPrimitive>{undefined}</RenderPrimitive>
        <RenderPrimitive>{null}</RenderPrimitive>
        <RenderPrimitive>{123}</RenderPrimitive>
        <RenderPrimitive>{new Symbol('foo')}</RenderPrimitive>
        <RenderPrimitive>{'bar'}</RenderPrimitive>

        {/* Prop shortcut */}
        <RenderPrimitive value={false} />
      </div>
    )
  }
}
```

## License

MIT © [jutaz](https://github.com/jutaz)
