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



    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
