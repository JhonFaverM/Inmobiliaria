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
    return jwt.sing({ _id: this._id, usuario: this.usuario, password: this.password, nombre: this.nombre, },"node-house")
}

module.exports = model("Asesor", asesorSchema,"asesores")
