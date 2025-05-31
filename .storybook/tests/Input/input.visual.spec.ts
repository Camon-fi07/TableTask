import { test, expect } from '@playwright/test';

const stories = [
  {
    id: 'default',
    name: 'Default'
  },
  {
    id: 'with-icons',
    name: 'With Icons'
  }
];

for (const story of stories) {
  test(`input ${story.name} should match screenshot`, async ({ page }) => {
    await page.goto(`http://localhost:6006/?path=/story/ui-input--${story.id}`);

    const frame = page
      .locator('iframe[title="storybook-preview-iframe"]')
      .contentFrame();

    const inputWrapper = frame.getByTestId('input-wrapper');

    await expect(inputWrapper).toHaveScreenshot(`ui-input--${story.id}.png`);
  });
}
