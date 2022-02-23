const mongoose = require("mongoose");

const conectionString = 
"mongodb+srv://jhonMachado:12345@cluster0.r2kwe.mongodb.net/inmobiliaria?retryWrites=true&w=majority";


const connectMongo = async () =>{
    try{
        await mongoose.connect(conectionString).then(()=>{
            console.log("conectado");
        });
    }catch(err){
        console.log("Error"+err);

    }

}
module.exports = {
    connectMongo
}



