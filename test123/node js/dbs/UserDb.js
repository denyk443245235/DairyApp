let mongoose = require('./mongo');
let Schem = mongoose.Schema;
let UserSchem = new Schem({
    login: String,
    password: String
});
let UserModel = mongoose.model('users', UserSchem);
module.exports = UserModel;