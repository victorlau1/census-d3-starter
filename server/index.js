const express = require('express');
const app = express();
const path = require('path');
const censusRouter = require('./census');
// const loginRouter = require('./login');

let port = process.env.PORT || 1337;

//Needs an index.html file generated
app.use(express.static(path.join(__dirname,'../client/src/public')));

app.get('/census', censusRouter)

// app.get('/login', loginRouter)

app.listen(port, () => {
  console.log('Listening on ', port);
})

module.exports = app;