const express = require("express");
const vjRoutes = require('./routes/videojuegos');
const sequelize = require('./utils/database');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use('/videojuegos',vjRoutes);
app.use(express.json());

sequelize.sync()
    .then(
        app.listen(8080,()=>{
            console.log("Servidor online en el puerto 8080")
        })
    )
    .catch(err=>console.log(err))

/*
app.get("/test", (req, res) => {
    res.send("Test of a working server.")
})
*/

/*
app.listen(8080, () => {
    console.log("Server online at 8080 port.")
})
*/