// // 
const mongoose = require('mongoose');   // require (or include) a mongoose package for transform the data into Object and mapping that Object in the db.
const Schema = mongoose.Schema;  // specify a blue-print(plan) or Schema(shema) of that Object 

const userSchema = new Schema({    // create a new Schema for a user data in Mongodb
    email:String,
   password:String
 })  

// //next, create a model for that Schema and export it to the db
 module.exports = mongoose.model('user', userSchema, 'users' );  // 1-parametar is the name of the model, 2-parametar is Schema for the user-userSchema and 3-parametar is the collections in the db-users
// //now, I have a model for create, edit, update, delete data(documents) in the db 

// // tha last remain task is to connect to the db in the api.js

// const mongoose = require('mongoose')

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: [true, 'Username is required']
//   },
//   created: {
//     type: Date,
//     required: [true, 'Created date is required']
//   }
// })

// module.exports = userSchema