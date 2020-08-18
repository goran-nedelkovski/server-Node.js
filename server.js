const express = require('express');        // requie (or include) 'express' package
const bodyParser = require('body-parser');// requie (or include) 'body-parser' package
const cors = require('cors');  // require Cross-origin-resource-shearing make a difference beetween the both (localhost:4200 and localhost:3000) and connect them
const PORT = 3000;    // def a PORT const. Express server is running od this PORT: 3000
const app = express(); // create a new instance of express

const mongoose = require('mongoose');
const db = 'mongodb://admin:admin@registrationdb-shard-00-00-kyktc.mongodb.net:27017,registrationdb-shard-00-01-kyktc.mongodb.net:27017,registrationdb-shard-00-02-kyktc.mongodb.net:27017/test?ssl=true&replicaSet=registrationdb-shard-0&authSource=admin&retryWrites=true&w=majority';  // take a connection string to the db (from a panel->connect->choose a connection metod->connect your applicaton..and copy thatg string).here just replace the username and password with the user's username: admin and pass:admin

const user = require('./routes/user');  // requuire(or include) the /api.js route
const contacts = require('./routes/contacts');  // requuire(or include) the /api.js route

app.use(bodyParser.json(), cors());   // specify and use body-parser to handle a json data

app.use('/user', user); // middleware..when use '/user', go to user router
 app.use('/contacts', contacts);  // middleware..when use '/contacts , go to contacts router' // specify and use the api rout


app.get('/', function(req,res) {     //test a get api request to the server 
    res.send('Hello from server');    // this is the Output message from the express server
}) 

mongoose.connect(db, { useNewUrlParser: true }, err => {   //connect to the db. 1-st parametarf is the conn string to the db, 2-nd parametarf is the callback function
    if (err) {
        console.log('Error' + err);
    }
    else {
        console.log('Connected to the mongodb');
    }
})

app.listen(PORT, function(){         // listen the requests to the server on PORT:3000
    console.log('Server is running on localhost:'+PORT);
})


// express server is now ready. lets start the Express server on the terminal with the command: node server

// it's better practise with separate Routes(paths) for every api request..for that purpose, create a new folder named Routes in server folder
