import { browser, logging } from 'protractor';
import { VisualizationPage } from './visualization.po';
import { VisualizationService } from 'src/app/services/visualization.service';

describe('Visualization Edit Page', () => {
    let page: VisualizationPage;

    beforeEach(() => {
        page = new VisualizationPage();

    });

    it('should display welcome message', async () => {
        await page.navigateTo();
        expect(await page.getTitleText()).toEqual('Project3Cvt');
    });

    it('should see Curriculum Select', async () => {
        await browser.get('http://localhost:4200/edit/visualization');
        expect(await page.getCurriculumSelectText()).toEqual('Curriculum-Select');
    });

    it('should add visualization', async () => {
        await browser.get('http://localhost:4200/edit/visualization');
        await page.clickAddVisualizationButton();
        await page.visualizationInput();
        await page.clickSubmitVisualizationButton();
        expect(await page.findAddedVisualization()).toEqual('ProtractorTest');

    });


    it('should update visualization', async () => {
        await browser.get('http://localhost:4200/edit/visualization');
        await page.clickUpdateTab();
        await page.clickAddedVisualization();
        await page.visualizationInput2();
        await page.clickUpdateButton();
        expect(await page.findUpdatedAddedVisualization()).toEqual('ProtractorTestUpdate');

    });

    it('should remove visualization', async () => {
        await browser.get('http://localhost:4200/edit/visualization');
        await page.clickUpdatedVisualization();
        await page.clickDeleteButton();

        expect(await page.getLastItem()).not.toEqual('ProtractorTestUpdate');

    });


    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });

    // afterAll(async () =>{
    //     page
    // })
});
