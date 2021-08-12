const BasePage = require("./basePage")
const locators = require("../locators/locators")

class MenuInnerTabsPage extends BasePage {

    constructor(webdriver){
        super(webdriver)
    }

    async goToSubMenuTab() {
        const menuWithSubMenuTab = await this.findElementByCss(locators.menuWithSubMenuTabLink)
        await this.clickToElement(menuWithSubMenuTab)
    }
}

module.exports = MenuInnerTabsPage 