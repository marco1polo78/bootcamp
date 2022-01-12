const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

function toHashPassword(req, res, next) {
    try {
        const { password } = req.body;
        const passwordHash = bcrypt.hashSync(password, 10);
        req.body.password = passwordHash;
        next();
    } catch (err) {
        next(err);
    }
}

async function auth(req, res, next) {
    try {
        const token = req.headers.authorization;
        const data = jsonwebtoken.verify(token, 'secret');
        req.ctx = { requester: data };
        next();
    } catch (err) {
        next({error: 'User is not authorized'});
    }
}

async function checkRole (req, res, next) {
    if (req.ctx.requester._id === req.body.authorId) {
        next();
    } else {
        next('The user does not have access');
    }
}

module.exports = {
    toHashPassword,
    auth,
    checkRole
}
