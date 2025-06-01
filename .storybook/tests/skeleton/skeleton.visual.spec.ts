import { test, expect } from '@playwright/test';

const stories = [
  {
    id: 'default',
    name: 'Default'
  },
  {
    id: 'edited',
    name: 'Edited'
  }
];

for (const story of stories) {
  test(`skeleton ${story.name} should match screenshot`, async ({ page }) => {
    await page.goto(
      `http://localhost:6006/?path=/story/ui-skeleton--${story.id}`
    );

    const frame = page
      .locator('iframe[title="storybook-preview-iframe"]')
      .contentFrame();

    const skeleton = frame.getByTestId('skeleton');

    await expect(skeleton).toHaveScreenshot(`ui-skeleton--${story.id}.png`);
  });
}
