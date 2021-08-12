# MediaLab Assignment Interview
Repository created to resolve the assignment interview at MediaLab.

# Goals

* Define Page Models
* Usage of the Page Object Pattern
* Objects Locators best practices
* Waits and code encapsulation
* Validate that test message ‘This is just a dummy form, you clicked SUBMIT BUTTON’ is
  now displayed
* Validate that the alert box has spawned with the correct copy

# Tools

* WebDriverJS - Selenium
* Chai
* Mocha
* Allure
* Faker  


# Getting Started

### Prerequisites

You need to have the following tools installed on your computer.

Node.js v10.12.0 or higher.
To install Node.js, download it from the Node.js webpage.
[DOWNLOAD NODE](https://nodejs.org/en/download/)

### Instructions.
Clone the repository in your local machine
```
git clone https://github.com/ictsuzuki/mediaLabInterview.git
```

### Installation
Install package dependencies by running.

```npm install```

### Project Structure
```
    ├── pom               # PageObject folder contain
        ├── data          # Contains all test data for the test scripts
        ├── locators      # Contains all the locators that are used in the
        └── pages         # Contains all the actions to interact with the web app
        └── tests         # Contains all the test scripts
        └── utils         # Contains all helper classes (webdriver)

```


### Test Run with console report

To see the execution results in the console run the next command:
```
npm run-console
```
### Test Run with allure report
To see the execution results in the allure report run the next commands:
```
npm run run-allure
```

Once the execution is completed run the next command:
```
npm run report
```

You should be able to see in your web browser an HTML report. 