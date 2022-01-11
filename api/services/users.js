const { usersDao } = require('../dao/index');

async function addUser(options) {
    try {
        const user = await usersDao.addUser(options);
        return {
            data: user
        };
    } catch (err) {
        throw err;
    }
}

async function getUserById(options) {
    try {
        const user = await usersDao.getUserById(options);
        return {
            data: user
        };
    } catch (err) {
        throw err;
    }
}

module.exports = {
    addUser,
    getUserById
}
