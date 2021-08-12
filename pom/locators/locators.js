module.exports = {
    // Registration Page Locators
    nameTextFieldCss: "input[name='name']",
    phoneTextFieldCss: "input[name='phone']",
    emailTextFieldCss: "input[name='email']",
    countryDropDownXpath: "select[name='country']",
    cityTextFieldCss: "input[name='city']",
    userNameTextFieldXpath: "//h3[contains(text(),'Registration')]/following-sibling::fieldset/input[@name='username']",
    passwordTextFieldXpath: "//h3[contains(text(),'Registration')]/following-sibling::fieldset/input[@name='password']",
    submitButtonXpath: "//h3[contains(text(),'Registration')]/following-sibling::div//input",
    alertMessageCss: "#alert",
    enterToTheTestingWebSiteLinkText: "ENTER TO THE TESTING WEBSITE",

    // PracticeAuto Page Locators
    menuWidgetCss: "a[href='menu.php']",

    // MainTabs Page Locators
    alertTabCss: "a[href='alert.php']",

    // MenuInnerTabs Page Locators
    menuWithSubMenuTabLink: "a[href='#example-1-tab-2']",

    // ContentInnerTab Page Locators
    iframeContentCss: "iframe[src='menu/defult2.html']",
    listMenuCss: "#menu > li",

    // SimpleAlert Page Locators
    iframeAlertCss: "iframe[src='alert/simple-alert.html']",
    alertButtonCss: "button[onclick='myFunction()']"
  }