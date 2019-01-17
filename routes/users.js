//All of user's routes
//Routing refers to how an application endooints resonds to client requests

//The routing methods speicify a callback function. With multiple callback functions, you need next as an argument to 
//the callback function and then call next() within the body of the function to hand off control to the next callback.
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');

//Register
//Use router.get instead of app.get
//will be url : ...users/register...
router.post('/register', (req, res, next) => {
    //Create new user

   

    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        //Will encrypt
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            //console.log(err);
            res.json({success:false , msg: "failed to register user"});
        }
        else{
            res.json({success:true, msg :"user registered"});
        }
    });
});

router.post('/authenticate', (req, res, next) => {
    res.send('authenticate');
});

//will protect with authentication
router.get('/profile', (req, res, next) => {
    res.send('profile');
});


//Need to export router for other files to use
module.exports = router;