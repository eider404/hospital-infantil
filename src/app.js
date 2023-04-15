const express = require('express');
const app = express();

const routes = require('./routes');


// EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/',routes);

// Inicio del servidor
app.listen(3000, () => {
  console.log(`SERVER RUNNING...`);
});
