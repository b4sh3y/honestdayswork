const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Hover Over Test', function () {
  this.timeout(50000);

  let driver;

  before(async function () {
    driver = new Builder().forBrowser('chrome').build();
  });

  after(async function () {
    await driver.quit();
  });

  it('Locate and click accept button', async function () { 
    let element =
        await driver.wait(until.elementLocated(By.id('tru_accept_btn')), 10000);
    await element.click()
  })

  it('Check color change on hover', async function () {
    await driver.get('https://sportradar.com'); 

    const element = await driver.findElement(By.id('menu-item-21030')); 

    const initialColor = await element.getCssValue('color');

    const actions = driver.actions();
    await actions.moveToElement(element).perform();

    await driver.wait(until.stalenessOf(element));

    const colorAfterHover = await element.getCssValue('color');

    assert.notStrictEqual(initialColor, colorAfterHover, 'Color did not change upon hover.');
  });
});
