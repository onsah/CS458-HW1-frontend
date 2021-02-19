const {Builder, By, Key, util} = require("selenium-webdriver");
const browsers = ['chrome', 'firefox']
const URL = "http://localhost:3000/";

async function verifySignIn(browser){
    let driver = await new Builder().forBrowser(browser).build();
    await driver.get(URL);
    await driver.findElement(By.className('signIn-btn')).sendKeys("Selenium", Key.ENTER);
    await driver.findElement(By.name('email')).sendKeys('berk.guler@windowslive.com');
    await driver.findElement(By.name('password')).sendKeys('berktest');
    await driver.findElement(By.className('sc-gKsewC lgICQF')).sendKeys("Selenium", Key.ENTER);
    console.log(`email value: ${await (await driver.findElement(By.name('email'))).getAttribute('value')}`);
    await sleep(100);

    driver.quit();
}

async function verifyForgotPassword(browser) {
    const driver = await new Builder().forBrowser(browser).build();
    await driver.get(URL + "forgot");

    const setEmail = async (email) => {

    };

    // Verify correct email adress sends email
        

    await driver.findElement(By.className('forgot-password')).sendKeys("Selenium", Key.ENTER);
//    await driver 
}

async function verifyRedirect(browser) {

}


async function verifyKeyboardInterface(browser) {
    const driver = await new Builder().forBrowser(browser).build();
    await driver.get(URL);
    
    await driver.findElement(By.className('forgot-password')).sendKeys("Selenium", Key.ENTER);
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
} 

/* run the tests for each browser */
browsers.forEach(verifySignIn)
browsers.forEach(verifyForgotPassword)
browsers.forEach(verifyRememberMe)
browsers.forEach(verifyKeyboardInterface)