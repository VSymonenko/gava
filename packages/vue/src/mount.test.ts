import { expect, test } from 'vitest';

import { mount } from './mount';

test('be function', () => {
  expect(mount).toBeTypeOf('function');
});