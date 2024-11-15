import { expect, test } from 'vitest';

import { mount } from '../src/mount';

test('be function', () => {
  expect(mount).toBeTypeOf('function');
});