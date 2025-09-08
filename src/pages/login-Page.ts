import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async navigateTo() {
    await this.page.goto("/");

  }

  async clickSubmit(){
    await this.page.click("button[type='submit']");
  }
}   