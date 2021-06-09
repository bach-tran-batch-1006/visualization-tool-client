import { browser, logging } from 'protractor';
import { CurriculaPage } from './Curricula.po';

describe('Curricula Edit Page', () => {
    let page: CurriculaPage;

    beforeEach(() => {
        page = new CurriculaPage();
    });

    it('should display welcome message', async () => {
        await page.navigateTo();
        expect(await page.getTitleText()).toEqual('Project3Cvt');
    });

    it('should click add Curriculum button, textbox and add input', async () => {
        await page.clickAddButton();
        await page.clickAddTextBox();
        await page.clickAddSubmit();
        expect(await page.findAddedCurriculum()).toEqual('TestAddCurriculum');
    });

    it('should click update Curriculum button, textbox and update input', async () => {
        await page.clickUpdateButton();
        await page.clickUpdateLastCurriculum();
        await page.clickUpdateTextBox();
        await page.clickUpdateSubmit();
        expect(await page.findUpdatedAddedCurriculum()).toEqual('zTestUpdateCurriculum');
    });

    it('should click delete Curriculum button', async () => {
        await page.selectUpdatedCurriculum();
        await page.clickDeleteButton();
        expect(await page.getLastItem()).not.toEqual('zTestUpdateCurriculum');
    });


    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
