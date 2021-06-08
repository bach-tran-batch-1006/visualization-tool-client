import { browser, by, element, protractor } from 'protractor';

export class SkillsAndCategoriesPage {

    // Add skill functions
    async clickShowAddSkillButton(): Promise<void> {
        await protractor.ExpectedConditions.elementToBeClickable(element(by.id("addSkillButton")));
        await element(by.id('addSkillButton')).click();
    }

    async newSkillInput(): Promise<void> {
        await element(by.id("addSkillInput")).sendKeys("ZZZ-Testing");
    }

    async checkCategory(): Promise<void> {
        await protractor.ExpectedConditions.elementToBeClickable(element(by.id("category_38")));
        await element(by.id("category_38")).click();
    }

    async getNewSkillRadioText(): Promise<string> {
        let last = await element.all(by.css('.showSkillList li')).last();
        return last.getText() as Promise<string>;
    }

    async clickSubmitAddSkillButton(): Promise<void> {
        await protractor.ExpectedConditions.elementToBeClickable(element(by.id('skillSubmit')));
        await element(by.id('skillSubmit')).click();
    }

    // Delete skill functions
    async checkSkillToDelete(): Promise<void> {
        await protractor.ExpectedConditions.elementToBeClickable(element(by.xpath('//*[text()=" ZZZ-Testing "]')));
        await element(by.xpath('//*[text()=" ZZZ-Testing "]')).click();
    }

    async clickDeleteSkillButton(): Promise<void> {
        await protractor.ExpectedConditions.elementToBeClickable(element(by.id("deleteSkillButton")));
        await element(by.id('deleteSkillButton')).click();
    }

    async getLastSkillRadioText(): Promise<string> {
        let last = await element.all(by.css('.showSkillList li')).last();
        return last.getText() as Promise<string>;
    }

    // Add Category
    async clickShowAddCategoryButton(): Promise<void> {
        await protractor.ExpectedConditions.elementToBeClickable(element(by.id("addCategoryButton")));
        await element(by.id("addCategoryButton")).click();
    }

    async newCategoryInput(): Promise<void> {
        await element(by.id("addCategoryInput")).click();
        await element(by.id("addCategoryInput")).sendKeys("ZZZ-Category");
    }

    async newCategoryTextarea(): Promise<void> {
        await element(by.id("addCategoryTextarea")).sendKeys("Description for ZZZ-category");
    }

    async clickSubmitAddCategoryButton(): Promise<void> {
        await protractor.ExpectedConditions.elementToBeClickable(element(by.id('categorySubmit')));
        await element(by.id('categorySubmit')).click();
    }

    async getNewCategoryRadioText(): Promise<string> {
        let last = await element.all(by.css('.showCategoryList li')).last();
        return last.getText() as Promise<string>;
    }

    // Delete Category
    async checkCategoryToDelete(): Promise<void> {
        await protractor.ExpectedConditions.elementToBeClickable(element(by.xpath('//*[text()=" ZZZ-Category "]')));
        await element(by.xpath('//*[text()=" ZZZ-Category "]')).click();
    }

    async clickDeleteCategoryButton(): Promise<void> {
        await protractor.ExpectedConditions.elementToBeClickable(element(by.id("deleteCategoryButton")));
        await element(by.id('deleteCategoryButton')).click();
    }

    async getLastCategoryRadioText(): Promise<string> {
        let last = await element.all(by.css('.showCategoryList li')).last();
        return last.getText() as Promise<string>;
    }

}
