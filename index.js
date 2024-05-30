const express = require('express');
const homeRoute = require('./routes/home');
const keys = require('./config/keys');
const order = require('./models/Order');
const customer = require('./models/Customer');
const pasta = require('./models/Pasta');
const sandwitch = require('./models/Sandwitch');
const burger = require('./models/Burger');
const pizza = require('./models/Pizza');
const starter = require('./models/Starter');
const local = require('./models/Local');
const sooper = require('./models/Sooper');
const sideOrder = require('./models/SideOrder');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express()


const port = 3000
// CONNECTING TO MONGODB
mongoose.connect('mongodb://127.0.0.1:27017/Cheezious_project');
const db = mongoose.connection;
db.on('error', ()=> console.log("Something went wrong to connect to database"));
db.once('open', ()=>{
  console.log("DB connection has been made successfully");
});

//MIDDLEWARE
//VIEW ENGINE SETUP
app.set('view engine', 'ejs');
//STATIC FOLDER SETUP
app.use(express.static('public'))
//SPECIFYING THE DEFAULT PAGE
app.get('/', (req, res)=>{
  res.render('Cheezious')
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json())
app.use(express.json());

//ROUTING
app.use('/', homeRoute)

// RUNNING SERVER
//const PORT = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})