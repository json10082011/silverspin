import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

Before(async function () {
    browser = await chromium.launch({ headless: true, slowMo: 100 }); // Slow down interactions for stability
    const context = await browser.newContext();
    page = await context.newPage();
});

Given('I open the SauceDemo login page', async function () {
    await page.goto('https://www.saucedemo.com/', { timeout: 3000 });
    await page.waitForSelector('#login-button', { timeout: 10000 });
});

When('I enter valid credentials', async function () {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
});

When('I enter invalid credentials', async function () {
    await page.fill('#user-name', 'invalid_user');
    await page.fill('#password', 'wrong_password');
});

When('I click the login button', async function () {
    await page.click('#login-button');
    await page.waitForLoadState('networkidle', { timeout: 10000 }); // Ensure page loads fully
});

Then('I should be redirected to the products page', async function () {
    await page.waitForSelector('.inventory_list', { timeout: 10000 });
    const isVisible = await page.isVisible('.inventory_list');
    if (!isVisible) {
        throw new Error('Products page not loaded');
    }
});

Then('I should see an error message', async function () {
    await page.waitForSelector('[data-test="error"]', { timeout: 15000 });
    const errorMessage = await page.textContent('[data-test="error"]');
    if (!errorMessage || !errorMessage.includes('Epic sadface')) {
        throw new Error('Error message not displayed');
    }
});

Given('I am logged into SauceDemo', async function () {
    await page.goto('https://www.saucedemo.com/', { timeout: 30000 });
    await page.waitForSelector('#login-button', { timeout: 10000 });
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.waitForSelector('.inventory_list', { timeout: 10000 });
});

When('I open the side menu', async function () {
    await page.click('#react-burger-menu-btn');
    await page.waitForSelector('#logout_sidebar_link', { timeout: 10000 });
});

When('I click the logout button', async function () {
    await page.click('#logout_sidebar_link');
    await page.waitForLoadState('networkidle', { timeout: 10000 });
});

Then('I should be redirected to the login page', async function () {
    await page.waitForSelector('#login-button', { timeout: 10000 });
    const isVisible = await page.isVisible('#login-button');
    if (!isVisible) {
        throw new Error('Login page not displayed');
    }
});

After(async function () {
    if (browser) {
        await browser.close();
    }
});
