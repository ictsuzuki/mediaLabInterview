const BasePage = require("./basePage")
const locators = require("../locators/locators")

class PracticeAutoPage extends BasePage {

    constructor(webdriver){
        super(webdriver)
    }

    async goToMenuWidgetPage(url) {
        const menuWidget = await this.findElementByCss(locators.menuWidgetCss)
        return await this.changeToNewTab(menuWidget, url)
    }
}

module.exports = PracticeAutoPage