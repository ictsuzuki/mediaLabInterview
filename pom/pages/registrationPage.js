const BasePage = require("./basePage")
const locators = require("../locators/locators")

class RegistrationPage extends BasePage {

    constructor(webdriver){
        super(webdriver)
    }

    async fillForm(name, phone, email, city, country, userName, password){

        const nameTextField = await this.findElementByCss(locators.nameTextFieldCss)
        const phoneTextField = await this.findElementByCss(locators.phoneTextFieldCss)
        const emailTextField = await this.findElementByCss(locators.emailTextFieldCss)
        const countryDropdown = await this.findElementByCss(locators.countryDropDownXpath)
        const cityTextField = await this.findElementByCss(locators.cityTextFieldCss)
        const userNameTextField = await this.findElementByXpah(locators.userNameTextFieldXpath)
        const passwordTextField = await this.findElementByXpah(locators.passwordTextFieldXpath)
        const submitButton = await this.findElementByXpah(locators.submitButtonXpath)

        var elemArr = [nameTextField, phoneTextField, emailTextField, countryDropdown, cityTextField, userNameTextField, passwordTextField]
        var strsArr = [name, phone, email, city, country, userName, password]
        
        for(var i=0; i<elemArr.length; i++){
            await this.writeToElement(elemArr[i], strsArr[i])
        }
        
        await this.clickToElement(submitButton)
    }

    async getAlertText() {
        const alertMessage = await this.findElementByCss(locators.alertMessageCss)
        await this.elementIsDisplayed(alertMessage)
        return await alertMessage.getText()
    }

    async goToTestingWebsite() {
        const enterToTheTestingWebSiteLink = await this.findElementByLinkText(locators.enterToTheTestingWebSiteLinkText)
        await this.clickToElement(enterToTheTestingWebSiteLink)
    }
}

module.exports = RegistrationPage