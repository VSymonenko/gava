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
  const instance = {
    setup() {
      return {
        count: 3
      }
    },
    template: '<div>{{ count }}</div>'
  }
  const cmp = mount(instance);
  expect(cmp).toHaveProperty('$'); // ComponentINternalInstance
  expectTypeOf(cmp).toEqualTypeOf<ComponentPublicInstance>();
});
