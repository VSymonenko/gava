import { createApp, type Component, h } from 'vue';

export function mount<T>(_cmp: Component<T>, props?: Record<string, unknown>) {
  if (!(['setup', 'template', '__v_isVNode'].some((key) => (key in _cmp)))) {
    throw new Error(`${_cmp} instance is not Vue3 Component`);
  }
  const app = createApp(_cmp, props);
  return app.mount(document.createElement('div'));
}