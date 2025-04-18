import test from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";
import { DashboardPage } from "../../../src/pages/pmtool/dashboard_page.ts";

test('Test Page Objects', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openPmtool();
    await loginPage.typeUsername("pw_academy");
    await loginPage.typePassword("Playwright321!");
    await loginPage.clickLoginButton();
})

test("Test more pages", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await loginPage.openPmtool();
    await loginPage.typeUsername("pw_academy");
    await loginPage.typePassword("Playwright321!");
    await loginPage.clickLoginButton();
    await dashboardPage.clickProfile();
    await dashboardPage.clickLogout();
  });