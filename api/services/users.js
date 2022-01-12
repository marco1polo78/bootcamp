const { usersDao } = require('../dao/index');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

async function addUser(options) {
    try {
        const user = await usersDao.addUser(options);
        return {
            data: 'Successful'
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

async function login({login, password}) {
    try {
        const user = await usersDao.getUserByName({login});
        if (!user) {
            return {
                status: 500,
                data: "Incorrect login or password"
            };
        }
        if (bcrypt.compareSync(password, user.password)) {
            const token = jsonwebtoken.sign({login, _id: user._id}, 'secret');
            return {
                token: token
            };
        } else {
            return {
                status: 500,
                data: "Incorrect login or password"
            };
        }
    } catch (err) {
        throw err;
    }
}

module.exports = {
    addUser,
    getUserById,
    login
}
