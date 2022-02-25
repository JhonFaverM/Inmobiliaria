
const express = require( "express");
const app = express();
require("./db/mongo").connectMongo();
const {asesores} = require("./routes/asesores");//desestructurar
const {apartamentos} = require("./routes/apartamentos");
const  cors = require('cors')

app.use(cors());
app.use(express.json());  // como llamar al body-parser
app.use(express.urlencoded({extended:false}));

app.use('/asesores', asesores);
app.use('/apartamentos', apartamentos);  //crear apartamentos



app.listen(5000,()=>{
    console.log("Estoy funcionando como servidor http://localhost:5000")
})