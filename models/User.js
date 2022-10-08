const mongoose = require('mongoose');


let userSchema = new mongoose.Schema
({
  
  name: {type:String, default:"noname"},
  age: Number,
  email: {type:String, required:true},
  password: {type:String, required:true},
  
})
const user = mongoose.model('user', userSchema);

module.exports = user