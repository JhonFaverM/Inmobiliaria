const Apartamento = require("../models/Apartamento")


const listApartamentos = (req, res)=>{
    Apartamento.find((err, apartamentos)=>{
        if(err) res.send(err)
        res.send(apartamentos)
    })

}

const buscarPorCiudad = (req, res)=>{
    Apartamento.ciudad.find((err, apartamentos)=>{
        if(err) res.send(err)
        res.send(apartamentos)
    })

}


const saveApartamento = (req, res) => {
    let document = req.body;
    Apartamento.find({ "ciudad": document.ciudad, "localidad": document.localidad,"estrato": document.estrato, "tipoInmueble": document.tipoInmueble,
        "metrosCuadrados": document.metrosCuadrados, "precioArriendo": document.precioArriendo, "habitaciones": document.habitaciones,"banos": document.banos, "garaje": document.garaje}, (err, apartamentos)  => {
       if (err) return res.send(err); 
       if (apartamentos.length > 0) {
           res.status(400).send({type:"error",msg:"El documento ya existe!"});
       } else {
           Apartamento.create(req.body).then((data) => {
               console.log(data)
               return res.status(200).send({type:"ok",msg:"Se creo el documento"});
           }).catch(err => {
               console.log(err);
               return res.status(500).send({type:"error", msg: err});
           })
       } 
    })
    console.log("desde save")
}
//Apartamento.find({ "ciudad": document.ciudad, "localidad": document.ciudad}, (err, apartamentos) => {

const deleteApartamento = (req, res) => {
    Apartamento.deleteOne({ "ciudad":req.query.ciudad, "localidad": req.query.localidad, "estrato": req.query.estrato, "tipoInmueble": req.query.tipoInmueble,
    "metrosCuadrados": req.query.metrosCuadrados, "precioArriendo": req.query.precioArriendo, "habitaciones": req.query.habitaciones, "banos": req.query.banos, "garaje": req.query.garaje}, (err, mongoResponse)=>{
        if(err) return res.send(err)
        console.log(mongoResponse)
        return mongoResponse.deleteCount == 1 ? res.send("Se eliminó un documento") : res.send("No se eliminó ningun documento")
    })
}

const updatePrecioArriendo = (req, res) => {
    if (req.body.precioArriendo) {
        Apartamento.updateOne({ "metrosCuadrados": req.query.metrosCuadrados, "precioArriendo": req.query.precioArriendo, "habitaciones": req.query.habitaciones}, (err, mongoResponse) => {
            if (err) return res.send(err)
            console.log(mongoResponse)
            return mongoResponse.modifiedCount == 1 ? res.send("Documento actualizado") : res.send("Documento no se actualizó")
        });
    }else{
        res.send("no ghhdghgdh")
    }
}

const actualizarApartamento = (req, res) => {
    Apartamento.updateOne({ "metrosCuadrados": req.query.metrosCuadrados, "precioArriendo": req.query.precioArriendo, "habitaciones": req.query.habitaciones}, (err, mongoResponse) => {
        if (err) return res.send(err)
        console.log(mongoResponse)
        return mongoResponse.modifiedCount == 1 ? res.send("Documento actualizado") : res.send("No se actualizo el documento")
    });
}

const searchApartamentoByCiudad = (req, res)=>{
    Apartamento.find({"ciudad":req.query.ciudad},(err, apartamentos) => {
        if (err) return res.send(err)
        return res.send(apartamentos)
    })
}

const mostrarPorLocalidad = (req, res)=>{
    Apartamento.find({"localidad":req.query.localidad}, (err, apartamentos) => {
        if (err) return res.send(err)
        return res.send(apartamentos)
    })
}

const crearApartamento=(req, res)=>{
    const apartamento = req.body;
    Apartamento.find({"dir":req.body.dir}, (err, apartamentos)=>{
        if(err) res.send(err)
        if(apartamentos.length>0) {
            res.send({"msg":"Ya existe apto","cod":"400"})
        }else{
            Apartamento.create(req.body).then((info)=>{
                res.send({"msg":"Ya quedo el apto creado"})
            }).catch(err=>{
                res.send({"msg:":"No se pudo grabar", "cod":"500"})
            })
        }
    })
    Apartamento.create(apartamento)
}



module.exports = {
    listApartamentos,
    saveApartamento,
    deleteApartamento,
    updatePrecioArriendo,
    actualizarApartamento,
    searchApartamentoByCiudad,
    mostrarPorLocalidad,
    crearApartamento,
    buscarPorCiudad

}