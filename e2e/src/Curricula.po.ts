import { browser, by, element, protractor, ProtractorExpectedConditions } from 'protractor';

export class CurriculaPage {
    async navigateTo(): Promise<unknown> {
        return browser.get('http://localhost:4200/edit/curriculum');
    }

    async getTitleText(): Promise<string> {
        return browser.getTitle();
    }

    async clickAddButton(): Promise<void> {
        await protractor.ExpectedConditions.elementToBeClickable(element(by.id('addCurriculumButton')));
        await element(by.id('addCurriculumButton')).click();
    }

    async clickAddTextBox(): Promise<void>{
        await protractor.ExpectedConditions.elementToBeClickable(element(by.id('addCurriculumTextBox')));
        await element(by.id('addCurriculumTextBox')).sendKeys('TestAddCurriculum');
    }

    async clickAddSubmit(): Promise<void>{
        await protractor.ExpectedConditions.elementToBeClickable(element(by.id('submitAdd')));
        await element(by.id('submitAdd')).click();
    }

    async clickUpdateButton(): Promise<void> {
        await protractor.ExpectedConditions.elementToBeClickable(element(by.id('updateCurriculumButton')));
        await element(by.id('updateCurriculumButton')).click();
    }

    async clickUpdateTextBox(): Promise<void>{
        await protractor.ExpectedConditions.elementToBeClickable(element(by.id('updateCurriculumTextBox')));
        await element(by.id('updateCurriculumTextBox')).clear();
        await element(by.id('updateCurriculumTextBox')).sendKeys('zTestUpdateCurriculum');
    }

    async clickUpdateLastCurriculum(): Promise<void>{
        await protractor.ExpectedConditions.elementToBeClickable(element(by.xpath('//*[text()=" TestAddCurriculum "]')));
        await element(by.xpath('//*[text()=" TestAddCurriculum "]')).click();
    }

    async clickUpdateSubmit(): Promise<void>{
        await protractor.ExpectedConditions.elementToBeClickable(element(by.id('submitUpdate')));
        await element(by.id('submitUpdate')).click();
    }

    async selectUpdatedCurriculum(): Promise<void>{
        await protractor.ExpectedConditions.elementToBeClickable(element(by.xpath('//*[text()=" zTestUpdateCurriculum "]')));
        await element(by.xpath('//*[text()=" zTestUpdateCurriculum "]')).click();
    }

    async clickDeleteButton(): Promise<void> {
        await protractor.ExpectedConditions.elementToBeClickable(element(by.id('deleteCurriculumButton')));
        await element(by.id('deleteCurriculumButton')).click();
    }

    async findAddedCurriculum(): Promise<string> {
        return await element(by.xpath('//*[text()=" TestAddCurriculum "]')).getText();
    }

    async findUpdatedAddedCurriculum(): Promise<string> {
        return await element(by.xpath('//*[text()=" zTestUpdateCurriculum "]')).getText();
    }

    async getLastItem(): Promise<string> {
        const last = await element.all(by.css('.listofcurriculum li')).last();
        return last.getText() as Promise<string>;

    }
}
