const jwt = require('jsonwebtoken');

exports.verifyToken = async (req, res) => {
        if (!req.headers.authorization) {
            res.status(401).send('Unauthorized request')
        }
        let token = req.headers.authorization.split(' ')[1]   //extract only the index [1] of that Array (that is the Value of the token). with split(' ') we have an Array with 2 elements.1st is the 'Bearer' and th2nd is the token Value 
        if (token === 'null') {
            res.status(401).send('Unauthorized request')
        }
        jwt.verify(token, 'secretKey', (error, payload) => {
            if (!payload) {
                res.status(401).send('Unauthorized request')
            }
            req.params.userId = payload.userId
        })
}