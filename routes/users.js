//All of user's routes

const express = require('express');
const router = express.Router();

//Register
//Use router.get instead of app.get
//will be url : ...users/register...
router.get('/register', (req, res, next) => {
    res.send('Register');
});

//Need to export router for other files to use
module.exports = router;