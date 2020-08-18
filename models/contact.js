// // 
const mongoose = require('mongoose');   // require (or include) a mongoose package for transform the data into Object and mapping that Object in the db.
const Schema = mongoose.Schema;  // specify a blue-print(plan) or Schema(shema) of that Object 

const contactSchema = new Schema({    // create a new Schema for a user data in Mongodb
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    userId:String
 })  

// //next, create a model for that Schema and export it to the db
 module.exports = mongoose.model('contact', contactSchema, 'contacts' );  // 1-parametar is the name of the model, 2-parametar is Schema for the user-userSchema and 3-parametar is the collections in the db-users
