const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");

(async function firstTest() {
  let driver;
  
  try {
    driver = await new Builder().forBrowser(Browser.SAFARI).build();
    await driver.get('http://127.0.0.1:50477/html/homepage.html');
  
    let title = await driver.getTitle();
    assert.equal("Welcome to health haven!", title);
  
    await driver.manage().setTimeouts({implicit: 500});
    
    let recipeButton = await driver.findElement(By.className('recipe-page'));
    
    await recipeButton.click();
    await driver.sleep(2000)
    
    title = await driver.getTitle();
    assert.equal("The Recipe Kitchen", title);

    let homeButton = await driver.findElement(By.className('home-button'));
    await homeButton.click();
    await driver.sleep(2000)
    title = await driver.getTitle();
    assert.equal("Welcome to health haven!", title);
  
    // let submitButton = await driver.findElement(By.css('button'));
  
    // await textBox.sendKeys('Selenium');
    // await submitButton.click();
  
    // let message = await driver.findElement(By.id('message'));
    // let value = await message.getText();
    // assert.equal("Received!", value);
  } catch (e) {
    console.log(e)
  } finally {
    await driver.quit();
  }
}())