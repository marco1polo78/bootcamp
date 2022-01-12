const { users } = require('../../services');

async function addUser(req, res, next) {
    const {
        firstName,
        lastName,
        login,
        emailAddress,
        password
    } = req.body;
    try {
        const options = {
            firstName,
            lastName,
            login,
            emailAddress,
            password
        };
        const result = await users.addUser(options);
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send({
            error: err || 'Something went wrong.'
        });
    }
}

async function getUserById(req, res, next) {
    const { _id } = req.params;
    try {
        const result = await users.getUserById({_id});
        res.status(200).send(result.data);
    } catch (err) {
        res.status(500).send({
            error: err || 'Something went wrong.'
        });
    }
}

async function login(req, res, next) {
    const {
        login,
        password
    } = req.body;
    try {
        const options = {
            login,
            password
        };
        const result = await users.login(options);
        res.status(result.status || 200).send(result);
    } catch (err) {
        res.status(500).send({
            error: err || 'Something went wrong.'
        });
    }
}

module.exports = {
    addUser,
    getUserById,
    login
}
