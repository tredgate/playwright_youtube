import { test, expect } from "@playwright/test";

test("Login Tests", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect(page.locator(".login-page-logo img")).toBeVisible();
  await expect(page.locator(".form-title")).toHaveText("Login");
  await page.locator("#username").fill("playwright_youtube");
  await page.locator("#password").fill("tredgateYoutube1");
  await page.locator("button[type='submit']").click();
});
