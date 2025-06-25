exports.ListAplication = class ListAplication {

    constructor(page) {

        this.page = page
        this.demoAppsFull = page.getByRole('link', { name: 'Fullstack' })
        this.demoApps = page.getByRole('link', { name: 'Backend' })
        this.selectLanguage = page.getByRole('link', { name: 'Go', exact: true })
        this.projectCards = page.locator('//div[contains(@class,\'css-1p234gs\')]//a//div//div//div//div[contains(@class, \'css-i6q5yz\')]');

    }

    async gotoPage() {
        await this.page.goto('https://codebase.show/projects/realworld', { waitUntil: 'domcontentloaded' });
    }

    async listAplication() {

        await this.demoAppsFull.click()
        await this.demoApps.click()
        await this.page.waitForTimeout(3000);
        await this.selectLanguage.click()
        await this.page.waitForTimeout(5000);
        //await this.demoAppsFull.waitFor({ state: 'visible' });
    }

    async getFirstThreeApplications() {
        const count = await this.projectCards.count();
        const max = Math.min(count, 3);

        const apps = [];

        for (let i = 0; i < max; i++) {
            const title = await this.projectCards.nth(i).innerText();
            apps.push(title.trim());
        }

        return apps;
    }

    async printCurrentUrl() {
        const url = this.page.url();
        console.log('URL actual:', url);
    }

}