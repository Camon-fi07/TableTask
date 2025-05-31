import { test, expect } from '@playwright/test';

const stories = [
  {
    id: 'default',
    name: 'Default'
  },
  {
    id: 'with-error',
    name: 'With Error'
  }
];

for (const story of stories) {
  test(`form ${story.name} should match screenshot`, async ({ page }) => {
    await page.goto(`http://localhost:6006/?path=/story/ui-form--${story.id}`);

    const frame = page
      .locator('iframe[title="storybook-preview-iframe"]')
      .contentFrame();

    const formItem = frame.getByTestId('form-item');

    await expect(formItem).toHaveScreenshot(`ui-form--${story.id}.png`);
  });
}
