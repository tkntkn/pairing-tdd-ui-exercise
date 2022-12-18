import { test, expect } from '@playwright/experimental-ct-react';
import { App } from './App';

test.use({ viewport: { width: 784, height: 804 } });

test('should work', async ({ mount }) => {
  const component = await mount(<App />);
  await expect(component).toHaveScreenshot();
});