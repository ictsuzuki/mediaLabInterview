const BasePage = require("./basePage")
const locators = require("../locators/locators")

class SimpleAlertPage extends BasePage {

    constructor(webdriver){
        super(webdriver)
    }

    async clickOnDisplayAlertButton() {
        const iframe = await this.findElementByCss(locators.iframeAlertCss)
        await this.switchToIframe(iframe)

        const alertButton = await this.findElementByCss(locators.alertButtonCss)
        await this.clickToElement(alertButton)
    }

    async getAlertText() {
        let alert = await this.switchToAlert()
        return await alert.getText()
    }
}

module.exports = SimpleAlertPage 