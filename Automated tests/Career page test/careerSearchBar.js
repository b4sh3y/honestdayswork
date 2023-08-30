let { Builder, By, until } = require('selenium-webdriver');
let assert = require('assert');

describe('Automated Test', function () {
  this.timeout(50000);
  
  let driver;

  async function countTableEntries() {
    let driver = new Builder().forBrowser('chrome').build();
  
    try {
      let table = await driver.findElement(By.id('tableId'));
  
      let rows = await table.findElements(By.css('tr'));
  
      let numberOfEntries = rows.length - 1;
  
      return numberOfEntries;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  

  before(async function () {
    driver = new Builder().forBrowser('chrome').build();
  });

  after(async function () {
    await driver.quit();
  });

  it('Open sportradar website', async function () {
    await driver.get('https://sportradar.com/careers');
  })

  it('Locate and click accept button', async function () { 
    let element =
      await driver.wait(until.elementLocated(By.id('tru_accept_btn')), 10000);
    await element.click()
  })
  //count trs before click - click - count trs after click

  it('Remote checkbox check', async function () {
    let numberOfEntriesBefore =  countTableEntries();
    let element =
      await driver.wait(until.elementLocated(By.id('location_remote')), 10000);
    await element.click()
    let numberOfEntriesAfter =  countTableEntries();
    assert.ok(numberOfEntriesAfter > numberOfEntriesBefore, 'The checkbox did not work')
  })  
  
  it('Location drop-down menu check', async function () {
    let element =
      await driver.wait(until.elementLocated(By.id('facet_location')), 10000);
    await element.click()
    let ulElement = await driver.findElement(By.className('srSearchOptionList'));
    let listItems = await ulElement.findElements(By.className('srSearchOptionListElement'));
    assert.ok(listItems > 2, 'The list did not drop down')
  })

  it('Filtering for keyword', async function () {
    let inputField = await driver.findElement(By.id('filter-by'));
    await inputField.sendKeys('Hello, World!');
    let element =
      await driver.wait(until.elementLocated(By.className('srSearchButton')), 10000);
    await element.click()
  })
  
});