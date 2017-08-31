var Promises = require('bluebird');
var seq = require('sequelize');
var db = Promise.promisifyAll(require('mysql'));

//Sequlize for promisification?
//Can do it either as a sequelize or as a DB promise
//Add config and launch.json file to read properly
db.connect({
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PWD || '',
  database: process.env.DB_INIT_DB || 'devdb' 
})


var saveData = (data) => {

  //Bulk Save?
  var options = {
    sql: 'INSERT INTO {TABLE} ({SCHEMA TO_DO }) VALUES (?)',
    values: [data]
  }

  return new Promise(db.query()
}


var insertData = () = {

  //Bulk Insert?
  return db.query()
}
