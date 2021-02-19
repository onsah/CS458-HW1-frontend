// redirect edince tekrar logine donuyor, cookie fln gerekiyor yapmadik.
const assert = require('assert');

const { Builder, By, Key, until } = require("selenium-webdriver");
const browsers = ['firefox']
const URL = "http://localhost:3000/";

async function login(driver, username, password) {
    await driver.get(URL);
    await driver.findElement(By.className('signIn-btn')).click();
    await driver.findElement(By.name('email')).sendKeys('berk.guler@windowslive.com');
    await driver.findElement(By.name('password')).sendKeys('berktest');
    await driver.findElement(By.className('sc-gKsewC lgICQF')).click();
}

async function verifySignIn(browser){
    let driver = await new Builder().forBrowser(browser).build();
    await login(driver, 'berk.guler@windowslive.com', 'berktest');
    
    try {
        await driver.wait(until.elementLocated(By.id('welcome-header')), 5000);
        console.log("Success!");
    } catch (e) {
        throw new Error("Signin failed.");
    } 
    await sleep(5000);
    driver.quit();
}

async function verifyForgotPassword(browser) {
    const CORRECT_EMAIL = "test@dummy.com";
    const WRONG_EMAIL = "test@dummy.com.tr";
    
    const setEmail = async (driver, email) => {
        const emailInput = await driver.findElement(By.id('input-email'));
        emailInput.sendKeys(email);
    };

    const clickEmail = async (driver) => {
        const button = await driver.findElement(By.id("forgot-button"));
        // button.sendKeys("Selenimum", Key.ENTER);
        await button.click();
    };

    // Verify correct email adress sends email
    (async () => {
        const driver = await new Builder().forBrowser(browser).build();
        await driver.get(URL + "forgotpassword");

        await setEmail(driver, CORRECT_EMAIL);
        await clickEmail(driver);
        try {
            await driver.wait(until.elementLocated(By.id('successMessage')), 5000);
        } catch (e) {
            throw new Error("success message didn't appear");
        } 
        
    })();

    (async () => {
        const driver = await new Builder().forBrowser(browser).build();
        await driver.get(URL + "forgotpassword");

        await setEmail(driver, WRONG_EMAIL);
        await clickEmail(driver);
        try {
            await driver.wait(until.elementLocated(By.id('emailResponse')), 5000);
        } catch (e) {
            throw new Error("error message didn't appear");
        } 
    })();

}

async function verifyRedirect(browser) {
    const driver = await new Builder().forBrowser(browser).build();
    await driver.get(URL + "forgotpassword");

    await login(driver, 'berk.guler@windowslive.com', 'testberk');
     
    await driver.wait(until.elementLocated(By.id("header-logo")));

    // back to login page
    const logo = await driver.findElement(By.id("header-logo"));
    await logo.sendKeys("Selenium", Key.ENTER);

    try {
        await driver.wait(until.elementLocated(By.id('welcome-header')), 5000);
        console.log("Success Redirect!");
    } catch (e) {
        throw new Error("Signin failed.");
    }
}

/* Navigates the page and fills them using only keyboard functionalities such as TABS and Enters
   In the verifySignin() method, click and find element methods were used to fill the form and navigate the site. 
*/
async function verifyKeyboardInterface(browser) {
    const driver = await new Builder().forBrowser(browser).build();
    await driver.get(URL);

    let mainPage = await driver.switchTo().activeElement();
    await mainPage.sendKeys(Key.TAB); // takes the user to the login page
    await mainPage.sendKeys(Key.TAB);
    await sleep(2000);
    await mainPage.sendKeys(Key.ENTER);

    let body= await driver.switchTo().activeElement();
    await body.sendKeys(Key.TAB);
    await sleep(2000);
    await body.sendKeys(Key.TAB);
    await body.sendKeys("berk.guler@windowslive.com");
    await sleep(2000);
    await body.sendKeys(Key.TAB);
    await sleep(1000);
    await body.sendKeys("berktest");
    await sleep(2000);
    await body.sendKeys(Key.TAB + Key.ENTER);
    await sleep(5000);
    driver.quit();
}

function sleep(ms) { 
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
} 

/* run the tests for each browser, it's recommended to run them one by one in order to avoid 8 browser instances oppening at once */
//browsers.forEach(verifyRedirect);
//browsers.forEach(verifySignIn)
//browsers.forEach(verifyForgotPassword)
browsers.forEach(verifyKeyboardInterface)