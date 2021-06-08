import { browser, by, element, protractor } from 'protractor';

export class SkillsAndCategoriesPage {
    async navigateTo(): Promise<unknown> {
        return browser.get(browser.baseUrl);
    }

    async getTitleText(): Promise<string> {
        return browser.getTitle();
    }



    async clickSubmitVisualizationButton(): Promise<void> {
        await protractor.ExpectedConditions.elementToBeClickable(element(by.id('visualizationSubmit')));
        await element(by.id('visualizationSubmit')).click();
    }


}
