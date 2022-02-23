const {Schema, model} = require("mongoose");



const apartamentoSchema = new Schema({
    id:{
        type: Number
    },
    ciudad:{
        type: String
    },
    localidad:{
        type: String
    },
    estrato:{
        type: Number
    },
    tipoInmueble:{
        type: String
    },
    metrosCuadrados:{
        type: String
    },
    precioArriendo:{
        type: Number
    },
    habitaciones:{
        type: Number
    },
    banos:{
        type: Number
    },
    garaje:{
        type: String
    }
});

/*
{
"ciudad": "Tunja",
"localidad": "Manantial",
"estrato": 3,
"tipoInmueble": "Casa",
"metrosCuadrados": "90 m2",
"precioArriendo": 600.000,
"habitaciones": 3,
"baños": 2,
"garaje": "Si"
}
*/


module.exports = model("Apartamento", apartamentoSchema,"apartamentos")

