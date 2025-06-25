import { test, expect } from '@playwright/test';
import {ListAplication, listAplication} from '../pages/listAplication'

test('seleccionar aplicacion', async ({ page }) => {

    const listApp = new ListAplication(page)
    await listApp.gotoPage()
    await listApp.listAplication()

  /*await page.goto('https://codebase.show/projects/realworld?category=frontend');
  await page.getByRole('link', { name: 'Backend' }).click();
  await page.getByRole('link', { name: 'Go', exact: true }).click();*/
});