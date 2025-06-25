exports.ListAplication = class ListAplication {

    constructor(page){

        this.page = page
        this.demoApps =  page.getByRole('link', { name: 'Backend' })
        this.selectLanguage =  page.getByRole('link', { name: 'Go', exact: true })

    }

    async gotoPage(){
         await this.page.goto('https://codebase.show/projects/realworld?category=frontend', { waitUntil: 'domcontentloaded' });
    }

    async listAplication(){

        await this.demoApps.click
        await this.selectLanguage.click
    }

}