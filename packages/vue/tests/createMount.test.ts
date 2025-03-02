import { expect, expectTypeOf, it } from 'vitest';

import type { Component } from 'vue';
import { createMount } from '../src/createMount';

const component: Component = { setup: () => { }, template: '' };
it('be function', () => {
  expect(createMount).toBeTypeOf('function');
});

it('return mount function', () => {
  const mount = createMount(component);
  expect(mount).toBeTypeOf('function');
});

it('take component', () => {
  expectTypeOf<typeof createMount>().parameters.toEqualTypeOf<[Component]>();
});

it.todo('take boot function');
it.todo('return result of boot function');