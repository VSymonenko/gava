import { Component, ComponentPublicInstance, defineComponent } from 'vue';
import { expect, expectTypeOf, test } from 'vitest';

import { mount } from '../src/mount';

test('be function', () => {
  expect(mount).toBeTypeOf('function');
});

test('take vue Component', () => {
  expect(() => mount({})).toThrowError();
});


const Instance: Component = {
  setup() {
    return {
      count: 3
    }
  },
  template: '<div>{{ count }}</div>'
}
test('return Vue3 Component', () => {
  const cmp = mount(Instance);
  expect(cmp).toHaveProperty('$'); // ComponentINternalInstance
  expectTypeOf(cmp).toEqualTypeOf<ComponentPublicInstance>();
});

test('take props optionally', () => {
  const Instance: Component = defineComponent({
    props: {
      count: {
        type: Number,
        default: 0
      },
    },
    template: '<div>{{ count }}</div>'
  });
  const cmp = mount(Instance, { count: 3 });
  expect(cmp.$el.textContent).toBe('3');
});

test.todo('receive slots', () => {
  const Parent: Component = {
    template: '<span><slot name="counter" /></span>'
  };
  const cmp = mount(Parent, { slots: { counter: Instance }});
  expect(cmp.$el.textContent).toBe('3');
});
