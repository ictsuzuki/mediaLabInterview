const {By, until} = require('selenium-webdriver')

class BasePage {
    constructor(webdriver) {
        this.driver = webdriver

        let driver = this.driver

        this.findElementById = async function (id) {
            return await driver.wait(until.elementLocated(By.id(id)), 5000, 'element with id:' + id + ' was not located');
        }
    
        this.findElementByCss = async function (css) {
            return await driver.wait(until.elementLocated(By.css(css)), 5000, 'element with css:' + css + ' was not located');
        }
    
        this.findElementByClass = async function (className) {
            return await driver.wait(until.elementLocated(By.className(className)), 5000, 'element with class:' + className + ' was not located');
        }
    
        this.findElementByXpah = async function (xpath) {
            return await driver.wait(until.elementLocated(By.xpath(xpath)), 5000, 'elements with xpath:' + xpath + ' were not located');
        }
        

        this.findElementByLinkText = async function(text) {
            return await driver.wait(until.elementLocated(By.linkText(text)), 5000, 'element with text:' + text + ' was not located');
        }

        this.findAllElementsByCss = async function (css) {
            return await driver.wait(until.elementsLocated(By.css(css)), 5000, 'elements with css:' + css + ' were not located')
        }
    
        this.writeToElement = async function (element, text) {
            return await element.sendKeys(text);
        }
    
        this.clickToElement = async function (element) {
            return await element.click();
        }

        this.elementIsDisplayed = async function(element) {
            return await driver.wait(until.elementIsVisible(element),5000, ' element is not displayed')
        }

        this.changeToNewTab = async function(element, url) {
            const originalWindow = await driver.getWindowHandle();
            await this.clickToElement(element)
            await driver.wait(
                async () => (await driver.getAllWindowHandles()).length === 2,
                10000
            );
            const windows = await driver.getAllWindowHandles();
            windows.forEach(async handle => {
                if (handle !== originalWindow) {
                  await driver.switchTo().window(handle);
                }
            });
            await driver.wait(until.urlIs(url), 10000);
        }

        this.switchToIframe = async function(iframeElement) {
            await driver.switchTo().frame(iframeElement)
        }

        this.switchToMainIframe = async function(){
            await driver.switchTo().defaultContent();
        }

        this.switchToAlert = async function(){
            await driver.wait(until.alertIsPresent())
            return await driver.switchTo().alert()
        }
    }
}

module.exports = BasePage;