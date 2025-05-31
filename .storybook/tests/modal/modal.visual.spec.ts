import { test, expect } from '@playwright/test';

const stories = [
  {
    id: 'default',
    name: 'Default'
  }
];

for (const story of stories) {
  test(`modal ${story.name} should match screenshot`, async ({ page }) => {
    await page.goto(`http://localhost:6006/?path=/story/ui-modal--${story.id}`);

    const frame = page
      .locator('iframe[title="storybook-preview-iframe"]')
      .contentFrame();

    const openModalButton = frame.getByTestId('open-modal');
    openModalButton.click();

    const modalOverlay = frame.getByTestId('modal-overlay');

    await expect(modalOverlay).toHaveScreenshot(`ui-modal--${story.id}.png`);
  });
}
