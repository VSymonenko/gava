import { expect, expectTypeOf, test } from 'vitest';

import { ComponentPublicInstance } from 'vue';
import { mount } from '../src/mount';

test('be function', () => {
  expect(mount).toBeTypeOf('function');
});

test('take vue Component', () => {
  expect(() => mount({})).toThrowError();
});


test('return Vue3 Component', () => {
  const Instance = {
    setup() {
      return {
        count: 3
      }
    },
    template: '<div>{{ count }}</div>'
  }
  const cmp = mount(Instance);
  expect(cmp).toHaveProperty('$'); // ComponentINternalInstance
  expectTypeOf(cmp).toEqualTypeOf<ComponentPublicInstance>();
});

test('take props optionally', () => {
  const Instance = {
    setup(props: { count: number }) {
      return {
        count: props.count
      }
    },
    template: '<div>{{ count }}</div>'
  }
  const cmp = mount(Instance, { count: 3 });
  expect(cmp.$el.textContent).toBe('3');
})
