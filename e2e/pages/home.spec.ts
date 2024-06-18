import { test, expect } from '@playwright/test';

test('Has title and description', async ({ page }) => {
  await page.goto('/');

  const title = page.getByRole('heading', {
    level: 1,
    name: "Hello, I'm your Next.js App",
  });

  const description = page.getByText('Make web great again!');

  await expect(title).toBeVisible();
  await expect(description).toBeVisible();
});
