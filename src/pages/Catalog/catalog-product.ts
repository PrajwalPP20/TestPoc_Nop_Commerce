import { WebPage } from "../../utils/web-page";

export class CatalogProductPage extends WebPage {
    private readonly LOCATORS = {
        searchBodyWrapper: this.page.locator('.search-body '),
    };
}