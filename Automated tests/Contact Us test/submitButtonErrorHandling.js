const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Automated Test', function () {
    this.timeout(50000);
  
    let driver;

  before(async function () {
    driver = new Builder().forBrowser('chrome').build();
  });

  after(async function () {
    // Close the WebDriver instance
    await driver.quit();
  });

  it('Open soportradar website', async function () {
    // Navigate to the endpoint
    await driver.get('https://sportradar.com/contact');
    });

  it('Locate and click accept button', async function () { 
        let element =
            await driver.wait(until.elementLocated(By.id('tru_accept_btn')), 10000);
        await element.click()
  })
  
  it('Click the Submit button without required data', async function () { 
    let element =
        await driver.wait(until.elementLocated(By.id('gform_submit_button_5')), 10000);
    await element.click()

    const elementExists = await driver.elementLocated(By.className('gform_validation_errors') & By.id('gform_5_validation_container'));
  })
});