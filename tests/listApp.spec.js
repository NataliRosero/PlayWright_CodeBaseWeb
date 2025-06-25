import { test, expect } from '@playwright/test';
import { ListAplication, listAplication } from '../pages/listAplication'

test('seleccionar aplicacion', async ({ page }) => {

    const listApp = new ListAplication(page)

    await listApp.gotoPage()
    await listApp.listAplication()
    
    //imprime las 3 primeras aplicaciones del listado que se visualiza
    const apps = await listApp.getFirstThreeApplications();
    console.log('Aplicaciones encontradas:', apps);
    expect(apps.length).toBeGreaterThan(0);
    //imprime la url final donde se muestra el listado de aplicaciones
    await listApp.printCurrentUrl();


});