const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

describe('Website Availability Test', function () {
  this.timeout(50000);

  let driver;

  before(async function () {
    driver = new Builder().forBrowser('chrome').build();
  });

  after(async function () {
    await driver.quit();
  });

  it('isAvailable', async function () {
    const websiteUrl = 'https://www.sportradar.com';

    await driver.get(websiteUrl);

    const errorElements = await driver.findElements(By.css('.error-class'));
    const isWebsiteAvailable = errorElements.length === 0;

    assert.strictEqual(isWebsiteAvailable, true, 'Website is not available.');
  });
});