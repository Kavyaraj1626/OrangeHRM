
import { test, expect } from '@playwright/test';

import details from '../Testdata/demo.json'

test('verify enterd details is correct', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box')
    await page.getByRole('textbox', { name: 'Full Name' }).fill(details.fullname)
    await page.getByRole('textbox', { name: 'Email' }).pressSequentially(details.emailid)
    await page.getByRole('textbox', { name: 'Current Address' }).fill(details.currentaddress)
    await page.getByRole('textbox', { name: 'Permanent Address' }).fill(details.permanentaddress)
    await page.getByRole('button', { name: 'Submit' }).click()

})


