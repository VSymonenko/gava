import { Component } from 'vue';
import { createApp } from 'vue';

export function mount<T>(_cmp: Component<T>) {
  if (!('setup' in _cmp)) {
    throw new Error(`${_cmp} instance is not Vue3 Component`);
  }
  const app = createApp(_cmp);
  return app.mount(document.createElement('div'));
}