const express = require("express");
const apartamentos = express.Router();
const { crearApartamento, buscarPorCiudad, listApartamentos, saveApartamento, deleteApartamento, updatePrecioArriendo, actualizarApartamento, searchApartamentoByCiudad} = require('../controllers/Apartamentos');

//const apartamentos = express.Router();

//const {login} = require("../controllers/Asesores")
//apartamentos.use()

 apartamentos.get('/', listApartamentos);
 apartamentos.get('/', searchApartamentoByCiudad);
 apartamentos.post('/', saveApartamento);
 apartamentos.post('/update', deleteApartamento);
 apartamentos.put('/update', actualizarApartamento);
 apartamentos.patch('/', updatePrecioArriendo);
 apartamentos.get('/buscarPorCiudad', buscarPorCiudad);
 //apartamentos.get('/', crearApartamento);


 
 module.exports = {
     apartamentos
 }