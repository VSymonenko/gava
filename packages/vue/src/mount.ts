import type { Component, VNode, ComponentPublicInstance } from 'vue';
import { createMount } from './createMount';

export function mount(cmp: Component, props?: Record<string, unknown> | string | (() => string)) {
  if (!(['setup', 'template', '__v_isVNode'].some((key) => (key in cmp)))) {
    throw new Error(`${cmp} instance is not Vue3 Component`);
  }
  const mount = createMount(cmp);
  const result = mount(props as object);
  return (result.$.subTree.children as Array<VNode>)[0]?.component?.proxy as ComponentPublicInstance;
}