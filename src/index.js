const express = require('express');
const cors = require('cors')
const app = express()



//middlerwares
// configura cors para permitir el acceso desde otro servidor
app.use(cors())
// permite que el servidor entienda el formato json, y lo transforma en un objeto de js
app.use(express.json());
// para poder recibir y entender datos de formularios
app.use(express.urlencoded({extended: false /* para rechazar datos como imagenes*/} ));

//routes
app.use(require('./routes/index'));


app.listen(4000);
console.log('Server runnng on Port 4000');