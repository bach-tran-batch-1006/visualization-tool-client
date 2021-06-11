import { browser, logging, by, element } from 'protractor';
import { SkillsAndCategoriesPage } from './SkillsAndCategories.po';

describe('Skills and Categories Edit Page', () => {
    let page: SkillsAndCategoriesPage;

    beforeEach(() => {
        page = new SkillsAndCategoriesPage();
    });

    it('should add a new category and click submit and verify it was added', async () => {
        await browser.get('http://localhost:4200/edit/skill-category');
        await page.clickShowAddCategoryButton();
        await page.newCategoryInput();
        await page.newCategoryTextarea();
        await page.clickSubmitAddCategoryButton();

        expect(await page.getNewCategoryRadioText()).toEqual('ZZZ-Category');
    });

    it('should add a new skill and click submit and verify it was added', async () => {
        await browser.get('http://localhost:4200/edit/skill-category');
        await page.clickShowAddSkillButton();
        await page.checkNewCategory();
        await page.newSkillInput();
        await page.clickSubmitAddSkillButton();

        expect(await page.getNewSkillRadioText()).toEqual('ZZZ-Testing');
    });

    it('should select, click delete and remove last added skill "ZZZ-Testing"', async () => {
        await browser.get('http://localhost:4200/edit/skill-category');
        await page.checkSkillToDelete();
        await page.clickDeleteSkillButton();

        expect(await page.getLastSkillRadioText()).not.toEqual('ZZZ-Testing');
    });

    it('should select, click delete and remove last added category "ZZZ-Category"', async () => {
        await browser.get('http://localhost:4200/edit/skill-category');
        await page.checkCategoryToDelete();
        await page.clickDeleteCategoryButton();

        expect(await page.getLastCategoryRadioText()).not.toEqual('ZZZ-Category');
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
