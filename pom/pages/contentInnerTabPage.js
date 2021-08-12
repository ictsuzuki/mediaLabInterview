const BasePage = require("./basePage")
const locators = require("../locators/locators")

class ContentInnerTabPage extends BasePage {

    constructor(webdriver){
        super(webdriver)
    }

    async selectAnyOptionFromMenu(option) {
        const iframe = await this.findElementByCss(locators.iframeContentCss)
        await this.switchToIframe(iframe)

        const listMenu = await this.findAllElementsByCss(locators.listMenuCss)

        await this.clickOnOption(listMenu, option)

    }

    async selectAnyOptionFromSubMenu(option, subOption) {

        const subListMenu = await this.findElementByXpah("//li[contains(text(),'" + option + "')]/ul")
        
        await this.clickOnOption(subListMenu, subOption)
    }

    async clickOnOption(listElements, option){
        for(var i=0; i< listElements.length; i++){
            if(await listElements[i].getText() == option){
                await this.clickToElement(listElements[i])
            }
        }
    }
}

module.exports = ContentInnerTabPage; 