const express = require('express') // require (or include an express package)
const router = express.Router()   // rezuire (or include) a router
const contactController = require('../controlers/contact-controller')

router
    .get('/', (req, res) => {   // rather the callback funtion here we use es6 syntax (like subscribe) (it's same)
        res.send('From API route');   //when we go on localhost:3000/api, this get request will execute
    })
    .post('/savecontact', contactController.saveContact)
    .get('/loadcontacts', contactController.loadContacts)
    




module.exports = router // export the router. then, tell in the server.js that we'are using the router (include the api route)

