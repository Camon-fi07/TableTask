import { test, expect } from '@playwright/test';

const stories = [
  {
    id: 'primary-small',
    name: 'Primary Small',
    testId: 'button-primary-small'
  },
  {
    id: 'primary-large',
    name: 'Primary Large',
    testId: 'button-primary-large'
  },
  {
    id: 'negative-small',
    name: 'Negative Small',
    testId: 'button-negative-small'
  },
  {
    id: 'outline-large',
    name: 'Outline Large',
    testId: 'button-outline-large'
  }
];

for (const story of stories) {
  test(`button ${story.name} should match screenshot`, async ({ page }) => {
    await page.goto(
      `http://localhost:6006/?path=/story/ui-button--${story.id}`
    );

    const frame = page
      .locator('iframe[title="storybook-preview-iframe"]')
      .contentFrame();

    const button = frame.getByTestId(story.testId);

    await expect(button).toHaveScreenshot(`ui-button--${story.id}.png`);
  });
}
