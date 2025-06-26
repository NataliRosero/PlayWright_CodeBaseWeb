import { test, expect } from '@playwright/test';
import { ListAplication, listAplication } from '../pages/listAplication'
import path from 'path';
import fs from 'fs';

test('Ver y Seleccionar aplicacion del listado', async ({ page }, testInfo ) => {

    const listApp = new ListAplication(page)

    await listApp.gotoPage()
    await listApp.listAplication()
    
    //imprime las 3 primeras aplicaciones del listado que se visualiza
    const apps = await listApp.getFirstThreeApplications();
    console.log('Aplicaciones encontradas:', apps);
    expect(apps.length).toBeGreaterThan(0);
    //imprime la url final donde se muestra el listado de aplicaciones
    await listApp.printCurrentUrl();

      // Carpeta donde se crean evidencias
    const folderPath = path.resolve('docs/evidencias');

    // Captura de pantalla
    const screenshotPath = path.join(folderPath, 'ListadoAPlicaciones-exitoso.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });

    // Adjuntar video si está disponible en el reporte
    if (testInfo.video) {
        const videoPath = path.join(folderPath, 'ListadoAPlicaciones.mp4');
        await testInfo.attach('video', { path: videoPath, contentType: 'video/mp4' });
    }

});