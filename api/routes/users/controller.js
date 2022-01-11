const { users } = require('../../services');

async function addUser(req, res, next) {
    const {
        firstName,
        lastName,
        emailAddress,
        password
    } = req.body;
    try {
        const options = {
            firstName,
            lastName,
            emailAddress,
            password
        };
        const result = await users.addUser(options);
        res.status(200).send(result.data);
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

module.exports = {
    addUser,
    getUserById
}
