var faker = require('faker');

const INFORMATION = {
    email: faker.internet.email(),
    userName: faker.internet.userName(),
    password: faker.internet.password()
}

module.exports = INFORMATION