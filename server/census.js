const express = require('express');
let router = express.Router();
let db = require('../db');
let axios = require('axios');
let bodyParser = require('body-parser');
//let apiKey = process.env.CENSUS_API;

//Set Serialization for all routers
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

app.use('/save', (req, res) => {
  let options = {
    url: 'uri',
    params: 'request params'
  }
  //Return data and error on resolution
  res.send(axios.get(options));
})

app.use('/get', (req, res) => {
  
})
