import { browser, by, element, protractor } from 'protractor';

export class CurriculaPage {
    async navigateTo(): Promise<unknown> {
        return browser.get(browser.baseUrl);
    }

    async getTitleText(): Promise<string> {
        return browser.getTitle();
    }




}
