const { User } = require('../db/models/users');

async function addUser(options) {
    const user = await User.create(options);
    return user;
}

async function getUserById({ _id }) {
    try {
        const user = await User.findById(_id);
        return user;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    addUser,
    getUserById
}