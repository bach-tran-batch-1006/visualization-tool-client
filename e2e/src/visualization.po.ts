import { browser, by, element, protractor } from 'protractor';

export class VisualizationPage {
    async navigateTo(): Promise<unknown> {
        return browser.get(browser.baseUrl);
    }

    async getTitleText(): Promise<string> {
        return browser.getTitle();
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

    async clickFirstCurricula(): Promise<void> {
        await protractor.ExpectedConditions.elementToBeClickable(element(by.id('curriculum_1')));
        await element(by.id('curriculum_1')).click();
    }

    async clickAddedVisualization(): Promise<void> {
        await protractor.ExpectedConditions.elementToBeClickable(element(by.xpath('//*[text()=" ProtractorTest "]')));

        await element(by.xpath("//*[text()=' ProtractorTest ']")).click();
    }

    async clickUpdateTab(): Promise<void> {
        await protractor.ExpectedConditions.elementToBeClickable(element(by.id('updateVisualizationButton')));
        await element(by.id('updateVisualizationButton')).click();
    }

    async findAddedVisualization(): Promise<string> {
        return await element(by.xpath('//*[text()=" ProtractorTest "]')).getText();
    }

    async findUpdatedAddedVisualization(): Promise<string> {
        return await element(by.xpath('//*[text()=" zProtractorTestUpdate "]')).getText();
    }

    async clickUpdatedVisualization(): Promise<void> {
        await element(by.xpath('//*[text()=" zProtractorTestUpdate "]')).click();
    }

    async visualizationInput2(): Promise<void> {
        await element(by.id('updateVisualBox')).clear();
        await element(by.id('updateVisualBox')).sendKeys("zProtractorTestUpdate");
    }

    async clickUpdateButton(): Promise<void> {
        await protractor.ExpectedConditions.elementToBeClickable(element(by.id('visualizationUpdateButton')));
        await element(by.id('visualizationUpdateButton')).click();
    }

    async clickDeleteButton(): Promise<void> {
        await protractor.ExpectedConditions.elementToBeClickable(element(by.id('removeVisualizationButton')));
        await element(by.id('removeVisualizationButton')).click();
    }

    async getLastItem(): Promise<string> {
        let last = await element.all(by.css('.listOfVisuals li')).last();
        return last.getText() as Promise<string>;

    }
}
