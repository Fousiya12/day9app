var express = require('express');
var router = express.Router();

const sequelize = new Sequelize('customer', 'root', 'Kollam123#', {
    host: 'localhost',
    dialect: 'mysql', 
    operatorsAliases: false,

    pool: {
      max:5,
      min:0,
      acquire:3000,
      idle:1000
    }
  });
  run().catch(error => console.log(error.stack));
  async function run(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  }
module.exports=sequelize;

 
        
 