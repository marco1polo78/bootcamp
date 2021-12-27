
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/Blog';

module.exports = async function () {
    await mongoose
        .connect(uri, {
            dbname: 'Blog'
        })
        .then(() => {
            console.log(`Conneection to database ${uri} successfully`)
        })
        .catch(err => {
            console.log(err);
        })
}