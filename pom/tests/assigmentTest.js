const RegistrationPage = require('../pages/registrationPage')
const PracticeAutoPage = require('../pages/practiceAutoPage')
const MenuInnerTabsPage = require('../pages/menuInnerTabsPage')
const ContentInnerTabPage = require('../pages/contentInnerTabPage')
const MainTabsPage = require('../pages/mainTabsPage')
const SimpleAlertPage = require('../pages/simpleAlertPage')
const BaseTest = require('./baseTest')
const DriverManager = require('../utils/driverManager')

const faker = require('../data/fakerData')
const data = require('../data/data')

const chai = require('chai'),
expect = chai.expect


describe("Interview Assigment tests", async function(){

    driver = DriverManager.buildDriver();
    baseTest = new BaseTest(driver);
    registrationPage = new RegistrationPage(driver);
    practiceAutoPage = new PracticeAutoPage(driver);
    menuInnerTabsPage = new MenuInnerTabsPage(driver);
    contentInnerTabPage = new ContentInnerTabPage(driver);
    mainTabsPage = new MainTabsPage(driver)
    simpleAlertPage = new SimpleAlertPage(driver)

    before(async function (){
        await baseTest.setUp(data.URL.BASE_URL);
    })

    it("Fill Form test", async function () {
        await registrationPage.fillForm(data.INFORMATION.name,
                                            data.INFORMATION.phone, 
                                            faker.email, 
                                            data.INFORMATION.city,
                                            data.INFORMATION.country, 
                                            faker.userName, 
                                            faker.password)

        expect(await registrationPage.getAlertText()).eql(data.EXPECTED.registration_text)
    })

    it("Navigate to testing website", async function () {
        await registrationPage.goToTestingWebsite()
        await practiceAutoPage.goToMenuWidgetPage(data.URL.BASE_URL + data.URL.MENU_URL)
        await menuInnerTabsPage.goToSubMenuTab()
        await contentInnerTabPage.selectAnyOptionFromMenu(data.EXPECTED.main_menu_option)
        await contentInnerTabPage.selectAnyOptionFromSubMenu(data.EXPECTED.main_menu_option,data.EXPECTED.sub_menu_option)
        await mainTabsPage.goToSubMenuTab()
        await simpleAlertPage.clickOnDisplayAlertButton()
        expect(await simpleAlertPage.getAlertText()).eql(data.EXPECTED.alert_text)
    })

    after(async function(){
        await baseTest.quit()
    })
})


