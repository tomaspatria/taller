import test from '../lib/BaseTest';

test('Test Login Page', async ({  loginPage, webActions }, testInfo) => {
    await test.step("Navigate to Application", async () => {
        await loginPage.navigateToURL();
        await testInfo.attach('Navigate to Application', {body: await loginPage.page.screenshot(), contentType: 'image/jpeg'});
    })
    await test.step("Login into application", async () => {
        await loginPage.loginToApplication();
        await testInfo.attach('Login into application', {body: await loginPage.page.screenshot(), contentType: 'image/jpeg'});
    })
    await test.step("Take the screenshots", async () => {
        await webActions.screenshot("LoginPage320x480",320,480);
        await webActions.screenshot("LoginPage480x800",480,800);
        await webActions.screenshot("LoginPage768x1024",768,1024);
    });
}); 