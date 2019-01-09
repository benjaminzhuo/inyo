const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
//Database stored in config file
const config = require('./config/database')

//Middleware functions are functions that have access to the req and res objects. 

mongoose.connect(config.database);

//Check for connection and log
mongoose.connection.on('connected', () => {
	console.log('connected to db ' + config.database);
});

mongoose.connection.on('error', () => {
	console.log('db error ' + err);
});

//Bringing in express
const app = express();
const port = 3000;

const users = require('./routes/users');

//Using cors middleware allows any domain to access
//We are gonna have authentication to disable routes if correct token not sent
app.use(cors());

//Set static folder 
//more info https://expressjs.com/en/starter/static-files.html
app.use(express.static(path.join(__dirname, 'public')));

//This routes URLs like localhost:3000/users/xxx to route to routes/users folder
app.use('/users', users); 

//Index Route
app.get('/', (req, res) =>{
    res.send('Invalid Endpoint');
});

//Body-parser middleware allows grabbing data from forms easily
app.use(bodyParser.json());

app.listen(port, () => {
    console.log('Server started on port 3000');
});

