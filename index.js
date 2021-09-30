const express = require("express");
const app = express();

app.get("/test", (req, res) => {
    res.send("Test of a working server.")
})

app.listen(8080, () => {
    console.log("Server online at 8080 port.")
})