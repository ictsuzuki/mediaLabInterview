class BaseTest {
    constructor(webDriver){
        this.webdriver = webDriver;
        let driver = this.webdriver;

        this.setUp = async function (url) {
            await driver.get(url);
            await driver.manage().timeouts().implicitlyWait(5000);
            await driver.manage().window().maximize();
            return await driver.manage().deleteAllCookies();
        }

        this.quit = async function () {
            return driver.quit();
        }

    }
}

module.exports = BaseTest;