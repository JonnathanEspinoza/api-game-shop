const User = require('../models/User');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

// sign up
exports.signup = (req, res) => {
    console.log('req.body', req.body); //{"name":"Jona", "email":"test@test.com", "password":"test123"}
    const user = new User(req.body);
    user.save((error, user) => {
        console.log('reached signup endpoint')
        if(error) {
            return res.status(400).json({
                message: "Please check fields, there was an Error"
            })
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        
        res.json({
            user
        })
    });
}

// sign in / login
