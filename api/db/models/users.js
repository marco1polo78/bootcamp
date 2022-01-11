const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = Schema({
    userName: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    }]
});

const User = mongoose.model('User', userSchema)

module.exports = { User };