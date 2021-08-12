const BasePage = require("./basePage")
const locators = require("../locators/locators")

class MainTabsPage extends BasePage {

    constructor(webdriver){
        super(webdriver)
    }

    async goToSubMenuTab() {
        await this.switchToMainIframe()
        const alertTab = await this.findElementByCss(locators.alertTabCss)
        await this.clickToElement(alertTab)
    }
}

module.exports = MainTabsPage 