var webdriver = require('selenium-webdriver')

function clickSignin(){
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://localhost:3000/').then(function()
    {
        driver.findElement(webdriver.By.linkText('Sign In')).click().then(function(){
            driver.getTitle().then(function(title){
                setTimeout(function(){
                    console.log(title);
                    driver.quit();
                }, 5000);
            });
        });
    });
}

clickSignin();