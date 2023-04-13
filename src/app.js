const express = require('express');
const app = express();


// Rutas
app.get('/', (req, res)=>{
    res.send("Hola")
});

// Inicio del servidor
app.listen(3000, () => {
  console.log(`SERVER RUNNING...`);
});
