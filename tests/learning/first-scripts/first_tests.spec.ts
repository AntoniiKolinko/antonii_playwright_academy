import { test } from "@playwright/test";

test("První test", async ({ page }) => {
    // Testovací kroky
    await page.goto("https://tredgate.com/pmtool/");
    await page.locator("#username").fill("pw_academy");
    await page.locator("#password").fill("Playwright321!");
    await page.locator(".btn").click();
  });
