const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{type:String, required:true},
    score:{type:Number}
});

const User = mongoose.model('user',userSchema);

async function addUser(data,callback) {
    var user = new User(data);
    const result = await user.save();
    callback();
}

async function getUser(data,callback) {
    var result = await User.find(data);
    console.log(result);
    callback(result);
}

module.exports = { addUser , getUser };