// // here we defaine all api endpoints
const express = require('express') // require (or include an express package)
const router = express.Router()   // rezuire (or include) a router
const userController = require('../controlers/user-controller')

// // next, handle the get api reqest
router
    .get('/', (req, res) => {   // rather the callback funtion here we use es6 syntax (like subscribe) (it's same)
        res.send('From API route');   //when we go on localhost:3000/api, this get request will execute
    })
    .post('/register', userController.register)
    .post('/login', userController.login)
    .get('/home', userController.home)




module.exports = router // export the router. then, tell in the server.js that we'are using the router (include the api route)
