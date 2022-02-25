const { JsonWebTokenError } = require("jsonwebtoken");
const {Schema, model} = require("mongoose");
const jwt = require("jsonwebtoken");



const asesorSchema = new Schema({
    usuario:{
        type: String
    },
    password:{
        type: String
    },
    nombre:{
        type: String
    }
});

asesorSchema.methods.generarJWT = () => {
    return jwt.sing({ _id: this._id, usuario: this.usuario, nombre: this.nombre, },"node-house")  //clave para verificar en middleware node
}

module.exports = model("Asesor", asesorSchema,"asesores")
