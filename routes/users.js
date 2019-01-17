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
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user)=>{
        if(err) throw err;

        //Check Username
        if(!user){
            return res.json({success:false, msg :'user not found'});
        }
        //Check password
        User.comparePassword(password, user.password, (err, isMatch)=>
        {
            if(err) throw err;

            if(isMatch){
                //create token
                const token = jwt.sign(user, config.secret, {
                    expiresIn:604800 //one week in seconds
                });

                res.json({
                    success: true,
                    token: 'JWT'+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username:user.username,
                        email: user.email
                    }
                }
                );
            }
            else
            {
                return res.json({success:false, msg: "wrong password"})
            }

        });
    });
});

//will protect with authentication
router.get('/profile', (req, res, next) => {
    res.send('profile');
});


//Need to export router for other files to use
module.exports = router;