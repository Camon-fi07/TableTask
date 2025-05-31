import { test, expect } from '@playwright/test';

const stories = [
  {
    id: 'default',
    name: 'Default'
  }
];

for (const story of stories) {
  test(`table ${story.name} should match screenshot`, async ({ page }) => {
    await page.goto(`http://localhost:6006/?path=/story/ui-table--${story.id}`);

    const frame = page
      .locator('iframe[title="storybook-preview-iframe"]')
      .contentFrame();

    const table = frame.getByTestId('table-component');

    await expect(table).toHaveScreenshot(`ui-table--${story.id}.png`);
  });
}
