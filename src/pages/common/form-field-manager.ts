import { PageSection } from '../../utils/page-section.js';
import { test } from '@playwright/test';

export enum OrdersLabels {
    StartDate = 'Start date',
    EndDate = 'End date',
    Warehouse = 'Warehouse',
    Product = 'Product',
    PaymentStatuses = 'Payment statuses',
    BillingPhoneNumber = 'Billing phone number',
    BillingEmailAddress = 'Billing email address',
    BillingLastName = 'Billing last name',
    OrderNotes = 'Order notes',
}

export class FormFieldManager extends PageSection {
  private getParentElementOfSpanWithText(text: string) {
    return this.page.locator('.form-group',{ hasText: text });
  }

  async fillTextField(label: string, value: string): Promise<void> {
    await test.step(`Filling text field ${label} with value ${value}`, async () => {
      const field = new AppFormSectionField(this.page, this.getParentElementOfSpanWithText(label));
      await field.textBox.fill(value);
    });
  }


  async selectDate(label: string, date: string): Promise<void> {
    const field = new AppFormSectionField(this.page, this.getParentElementOfSpanWithText(label));
    await field.selectDate(date);
  }


}

class AppFormSectionField extends PageSection {
  private readonly LOCATORS = {
    textBox: this.scope.locator('input[type="text"]'),
    button: this.scope.locator('button'),
    textArea: this.scope.locator('textarea'),
    datePicker: this.scope.locator('input'),
    appDynamicFormField: this.scope.locator('app-dynamic-form-field'),
  };

  get textBox() {
    return this.LOCATORS.textBox;
  }

  get textArea() {
    return this.LOCATORS.textArea;
  }

  get button() {
    return this.LOCATORS.button;
  }

  public async textContent(): Promise<string> {
    const content = await this.LOCATORS.appDynamicFormField.textContent();
    return content ?? '';
  }

  private get datePicker() {
    return this.LOCATORS.datePicker;
  }

  async selectDate(date: string) {
    await this.datePicker.fill(date);
  }

  async uploadFile(file: string) {
    await this.scope.locator('input[type="file"]').setInputFiles(file);
  }
}
