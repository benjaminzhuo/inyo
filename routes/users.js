//All of user's routes
//Routing refers to how an application endooints resonds to client requests

//The routing methods speicify a callback function. With multiple callback functions, you need next as an argument to 
//the callback function and then call next() within the body of the function to hand off control to the next callback.
const express = require('express');
const router = express.Router();

//Register
//Use router.get instead of app.get
//will be url : ...users/register...
router.get('/register', (req, res, next) => {
    res.send('Register');
});

router.post('/authenticate', (req, res, next) => {
    res.send('authenticate');
});

//will protect with authentication
router.get('/profile', (req, res, next) => {
    res.send('profile');
});


router.get('/validate', (req, res, next) => {
    res.send('validate');
});
//Need to export router for other files to use
module.exports = router;