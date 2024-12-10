# Gava.js Vue

## Library for Vue.js 3 projects

## Usage

Use for unit testing with any test runner.

### Mount component

```js
import { mount } from '@gavajs/vue';

const instance = mount(Component);
```

The mount function have input interface the same with [Vue render function](https://vuejs.org/api/render-function.html#h).
And return `ComponentPublicInstance`

```ts
// short signature
// with props
function mount(type: string | Component, props?: object);
// or with children
function mount(type: string | Component, children?: Children);
type Children = string | number | boolean | VNode | null | Children[];
// or with slot
function mount(type: string | Component, slot?: () => Children);
// or with named slots
function mount(type: string | Component, slots: { [name: string]: Slot });
```

```ts
// long signature
function mount(
  type: string | Component,
  props?: object | null,
  children?: Children | Slot | Slots
): ComponentPublicInstance
```
