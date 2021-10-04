const path = require('path')
const Videojuego = require('../utils/database').models.videojuego
const Consola = require('../utils/database').models.consola

// Videojuegos
exports.postAgregarVideojuego = (req,res)=>{
    console.log(req.body) //<={id: number,nombre:text}
    Videojuego.create(req.body)
        .then(vj=>{
            console.log("Registro de Videojuego existoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
    //res.redirect('/videojuegos/confirmacionDatos')
}

exports.getObtenerVideojuegos = (req,res)=>{
    Videojuego.findAll()
        .then(videojuegos =>{
            console.log(videojuegos)
            res.json(videojuegos)
        })
        .catch(err=>console.log(err))
} 

exports.postBorrarVideojuego = (req,res)=>{
    console.log(req.body)
    Videojuego.destroy({
       where:{
           id: req.body.id
       } 
    })
    .then(() =>{
        console.log("Videojuego eliminado")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarVideojuego = (req,res)=>{
    console.log(req.body)
    Videojuego.update({
        nombre:req.body.nombre
    },{
      where:{
          id: req.body.id
      }  
    })
    .then(() =>{
        console.log("Videojuego actualizado")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

// Consolas
exports.postAgregarConsola = (req,res)=>{
    console.log(req.body) //<={id: number,nombre:text}
    Consola.create(req.body)
        .then(vj=>{
            console.log("Registro de Consola existoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
    //res.redirect('/videojuegos/confirmacionDatos')
}

exports.getObtenerConsola = (req,res)=>{
    Consola.findAll()
        .then(consolas =>{
            console.log(consolas)
            res.json(consolas)
        })
        .catch(err=>console.log(err))
} 

exports.postBorrarConsola = (req,res)=>{
    console.log(req.body)
    Consola.destroy({
       where:{
           id: req.body.id
       } 
    })
    .then(() =>{
        console.log("Consola eliminada")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarConsola = (req,res)=>{
    console.log(req.body)
    Consola.update({
        nombre:req.body.nombre
    },{
      where:{
          id: req.body.id
      }  
    })
    .then(() =>{
        console.log("Consola actualizada")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

// Consola & Videojuego (Tabla intermedio)
exports.postAgregarComboConsolaVideojuego = (req,res)=>{
    console.log(req.body) //<={id: number,nombre:text}
    Combo.create(req.body)
        .then(vj=>{
            console.log("Registro de Combo existoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
    //res.redirect('/videojuegos/confirmacionDatos')
}

exports.getObtenerComboConsolaVideojuego = (req,res)=>{
    Combo.findAll()
        .then(combo =>{
            console.log(combo)
            res.json(combo)
        })
        .catch(err=>console.log(err))
} 

exports.postBorrarComboConsolaVideojuego = (req,res)=>{
    console.log(req.body)
    Combo.destroy({
       where:{
           idCV: req.body.id
       } 
    })
    .then(() =>{
        console.log("Combo eliminado")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarComboConsolaVideojuego = (req,res)=>{
    console.log(req.body)
    Combo.update({
        lanzamiento:req.body.lanzamiento
    },{
      where:{
          idCV: req.body.id
      }  
    })
    .then(() =>{
        console.log("Combo actualizado")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}