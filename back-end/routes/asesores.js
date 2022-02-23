const express = require("express");

const asesores = express.Router();
const { login, listAsesores } = require("../controllers/Asesores");

 asesores.post('/login', login);
 asesores.get('/', listAsesores);
 //asesores.post('/asesores', asesores);
 
 
 
 
 module.exports = {
     asesores
 }
 