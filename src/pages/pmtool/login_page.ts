//login_page.ts
// src/pages/pmtool
import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
  // 1. Identifikace prvků a dalších properties
  private readonly page: Page;
  private readonly url = "https://tredgate.com/pmtool/";
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  // 2. Constructor v kterém nastavíme jednotlivé lokátory
  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator(".btn");
  }

  // 3. Ovládací metody
  async typeUsername(username: string){
    await this.usernameInput.fill(username);
  }
  async typePassword(password: string){
    await this.passwordInput.fill(password);
  }
  async openPmtool() {
    await this.page.goto(this.url);
  }
  async clickLoginButton() {
    await this.loginButton.click();
  }
  async login(username: string, password: string) {
    await this.openPmtool();
    await this.typeUsername(username);
    await this.typePassword(password);
    await this.clickLoginButton();
  }
}
