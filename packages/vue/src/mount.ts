import { createApp, type Component, h, VNode, ComponentPublicInstance } from 'vue';

export function mount(cmp: Component, props?: Record<string, unknown> | string | (() => string)) {
  if (!(['setup', 'template', '__v_isVNode'].some((key) => (key in cmp)))) {
    throw new Error(`${cmp} instance is not Vue3 Component`);
  }
  const child = h(cmp, props); 
  const Parent: Component = {
    render() {
      return h('div', null, child);
    },
  };
  const app = createApp(Parent);
  const root = document.createElement('div');
  const result = app.mount(root);
  return (result.$.subTree.children as Array<VNode>)[0].component?.proxy as ComponentPublicInstance;
}