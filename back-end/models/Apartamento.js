const {Schema, model} = require("mongoose");



const apartamentoSchema = new Schema({
    direccion:{
        type: String
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
    }
});


module.exports = model("Apartamento", apartamentoSchema,"apartamentos")

