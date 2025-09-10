import { WebPage } from "../utils/web-page";
import { HomePage } from "./home-page";

export class LoginPage extends WebPage {
//add locators and constructors

  async login(): Promise<HomePage> {
    await this.page.goto("/");
    await this.page.click("button[type='submit']");
    await this.page.waitForTimeout(3000);
    return new HomePage(this.page);
  }
}