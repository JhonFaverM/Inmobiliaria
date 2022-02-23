
const Asesores = require("../models/Asesor")

 

const login = (req, res)=> {
    req.body.usuario && req.body.password ?
        Asesores.findOne({ usuario: req.body.usuario}, (err, user) => {
            console.log(user)
                switch(true) {
                    case (err):
                        res.send({ "msg": err });
                        break;
                    case(user==null):
                        res.send({"msg":"No se encuentra el usuario"});
                        break;
                    case(user.password == req.body.password):
                        res.send({"msg":"se puede loggear"})
                        break;
                    case (user?.password != req.body.password):
                        res.send({ "msg": "La contraseña está erronea" })
                        break;
                                    
                }
                
            //}           
        
    })
    :
    res.send({"msg":"Te falta algun dato (usuario o contraseña)"});
}


 
const listAsesores = (req, res)=>{
    Asesores.find((err, asesores)=>{
        if(err) res.send(err)
        res.send(asesores)
    })

}


/**
    const login = (req, res)=>{
    //console.log("me llamaron")
    req.body.usuario && req.body.password ?
        Asesores.findOne({ usuario: req.body.usuario, password: req.body.password}, (err, user) => {
            console.log(user)
                switch(true){
                    case (err):
                        res.send({ "msg": err })
                        break;
                    case(user==null):
                        res.send({"msg":"No se encuentra el usuario"})
                        break;
                    case(user.password == req.body.password):
                        let token = user.generarJWT()
                        res.send({"msg":"se puede loggear",token})
                        break;
                    case (user?.password != req.body.password):
                        res.send({ "msg": "La contraseña está erronea" })
                        break;
                                    
                }
                
            //}           
        
    })
    :
    res.send({"msg":"Te falta algun dato (usuario o contraseña)"});
}

 */





module.exports = {
    login,
    listAsesores
}




