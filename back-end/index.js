const express = require("express");
const app = express();
const port = 3000;

//ruta de ejemplo
app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

//iniciar el servidor
app.listen(port, () => {
  console.log(`servidor escuchando el puerto ${port}`);
});
