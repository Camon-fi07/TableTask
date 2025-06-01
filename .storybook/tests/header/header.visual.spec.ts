import { test, expect } from '@playwright/test';

const stories = [
  {
    id: 'default',
    name: 'Default'
  }
];

for (const story of stories) {
  test(`header ${story.name} should match screenshot`, async ({ page }) => {
    await page.goto(
      `http://localhost:6006/?path=/story/components-header--${story.id}`
    );

    const frame = page
      .locator('iframe[title="storybook-preview-iframe"]')
      .contentFrame();

    const header = frame.getByTestId('header');

    await expect(header).toHaveScreenshot(`components-header--${story.id}.png`);
  });
}
