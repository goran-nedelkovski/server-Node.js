const express = require('express');
const jwt = require('jsonwebtoken');

const userService = require('../services/user-service');
const tokenUtils = require('../utils/token-utils');

// // next, handle the get api reqest

// Register API
exports.register = async (req, res) => {   // post request to the api_endpoint /register (localhost:3000/api/register)
        //    const promise= new Promise((resolve, reject)=>{
             //nekoj kod ...'ok'
        //         resolve('OK');
        //         if (err)
        //         {
        //             reject('eroor');
        //         }
        //    });

        //    promise.then((result) =>{
        //        res
        //    }).error((reject)=>{
        //        rej
        //    })
    try{
        let registeredUser = await userService.register(req.body);
        return res.json(registeredUser);
   }catch(error){
        return res.json({ status:400, message: error.message});
   }
};

//  //Login API
exports.login = async (req, res) => {     // post request to the api_endpoint /login (localhost:3000/api/login)
    
   try{
        let user = await userService.login(req.body);

        let payload = { userId: user.id }
        let token = jwt.sign(payload, 'secretKey');
        return res.json({token});
   }catch(error){
        return res.json({ status:400, message: error.message})
   }

};

// Home-User API
exports.home = async (req, res) => {
    try{
        await tokenUtils.verifyToken(req, res);
        var user =  await userService.home(req.params.userId);
        return res.json(user);
   }catch(error){
        return res.json({ status:400, message: error.message})
   }
};
