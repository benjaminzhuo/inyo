//All of user's routes

const express = require('express');
const router = express.Router();

//Register
//Use router.get instead of app.get
//will be url : ...users/register...
router.get('/register', (req, res, next) => {
    res.send('Register');
});

router.get('/authenticate', (req, res, next) => {
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