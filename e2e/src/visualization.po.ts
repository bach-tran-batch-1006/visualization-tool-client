import { browser, by, element, protractor } from 'protractor';

export class VisualizationPage {
    async navigateTo(): Promise<unknown> {
        return browser.get(browser.baseUrl);
    }

    async getTitleText(): Promise<string> {
        return browser.getTitle();
    }

    async getFail(): Promise<string> {
        return element(by.css('app-root .content span')).getText() as Promise<string>;
    }

    async getCurriculumSelectText(): Promise<string> {
        return element(by.id('CurriculumSelectText')).getText() as Promise<string>;
    }

    async clickAddVisualizationButton(): Promise<void> {
        await protractor.ExpectedConditions.elementToBeClickable(element(by.id('addVisualizationButton')));
        await element(by.id('addVisualizationButton')).click();
    }

    async visualizationInput(): Promise<void> {

        await element(by.id('addVisualBox')).sendKeys("ProtractorTest");
    }

    async clickSubmitVisualizationButton(): Promise<void> {
        await protractor.ExpectedConditions.elementToBeClickable(element(by.id('visualizationSubmit')));
        await element(by.id('visualizationSubmit')).click();
    }


}
