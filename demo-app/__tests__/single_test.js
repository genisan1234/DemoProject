const webdriver = require('selenium-webdriver');
const url = 'http://127.0.0.1:8080/';
describe('Test_Suite-2',()=>{
    let driver;
    driver = new webdriver.Builder().forBrowser('firefox').build();
    driver.get(url);
    test('Test Connection with REST api', async () => {
      await driver.get(url)
      const title =    await driver.getTitle();
      const title1 = await driver.findElement(webdriver.By.tagName('h1')).getText();
      expect(title1).toBe('Hello');
    });
    afterAll(async () => {
      await driver.quit();
    }, 15000);
  }, 10000);


