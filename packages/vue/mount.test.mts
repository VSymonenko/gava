import { expect, test } from 'vitest';
import { mount } from './mount.mts';

test('be function', () => {
  expect(mount).toBeTypeOf('function');
});