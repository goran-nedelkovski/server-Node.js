const express = require('express');
const User = require('../models/user');


exports.register =async (requestBody) => { 
    try{  // post request to the api_endpoint /register (localhost:3000/api/register)
        let userData = requestBody              // extract the userData(body) from the req object
        let user = new User(userData)         // create user object od model object with that userData
        let createdUser = await user.save();
        return createdUser;
    }catch(error) {
        throw error;
    }
};

exports.login = async (requestBody) => {     // post request to the api_endpoint /login (localhost:3000/api/login)
    // now, we must check if the e-mail exist or not in the db, with the findOne()
    try {
        const user = await  User.findOne({ email: requestBody.email }).select();
        return user;
    } catch(error) {
        throw err;
    }
            
};

exports.home = async (userId) => {
    try {
        var user = await User.findOne({ '_id': userId }).select();
        return user;
    } catch(error) {
        throw error;
    }
};