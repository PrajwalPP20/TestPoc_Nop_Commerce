import { Page } from "@playwright/test";
import { WebPage } from "../utils/web-page";

export class LoginPage extends WebPage {
  

  async navigateTo() {
    await this.page.goto("/");

  }

  async clickSubmit(){
    await this.page.click("button[type='submit']");
  }
}   