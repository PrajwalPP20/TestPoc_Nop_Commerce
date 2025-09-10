import { WebPage } from "../utils/web-page"
import { FormFieldManager, OrdersLabels } from "./common/form-field-manager";


export class OrdersPage extends WebPage {
    private readonly LOCATORS = {
        searchBodyWrapper: this.page.locator('.search-body '),
    };

    private get formFieldManager(): FormFieldManager {
        return new FormFieldManager(this.page, this.LOCATORS.searchBodyWrapper);
    }

    async fillDateField(): Promise<void> {
        // const date : string = new Date().toLocaleDateString('en-GB');
        await this.formFieldManager.selectDate(OrdersLabels.StartDate, '08/07/2026');
    }

    async fillProductField(productDetails: string){
        await this.formFieldManager.fillTextField(OrdersLabels.Product, productDetails);
    }

    async fillEmailField(email: string){
        await this.formFieldManager.fillTextField(OrdersLabels.BillingEmailAddress, email);
    }

    async fillBillingLastNameField(lastName: string){
        await this.formFieldManager.fillTextField(OrdersLabels.BillingLastName, lastName);
    }

    async fillOrdersNotesField(orderNotes: string){
        await this.formFieldManager.fillTextField(OrdersLabels.OrderNotes, orderNotes);
    }

    async fillRequiredDetails(productDetails: string, email: string, billingLastName: string, orderNotes:string): Promise<void> {
        // await this.fillDateField();
        await this.fillProductField(productDetails);
        await this.fillEmailField(email);
        await this.fillBillingLastNameField(billingLastName);
        await this.fillOrdersNotesField(orderNotes);
    }

}