import { test, expect } from '@playwright/test';

const stories = [
  {
    id: 'default',
    name: 'Default'
  },
  {
    id: 'with-input',
    name: 'With Input'
  }
];

for (const story of stories) {
  test(`label ${story.name} should match screenshot`, async ({ page }) => {
    await page.goto(
      `http://localhost:6006/?path=/story/ui-label--${story.id}`,
      { waitUntil: 'domcontentloaded' }
    );

    const frame = page
      .locator('iframe[title="storybook-preview-iframe"]')
      .contentFrame();

    const label = frame.getByTestId('label-component');

    await expect(label).toHaveScreenshot(`ui-label--${story.id}.png`);
  });
}
