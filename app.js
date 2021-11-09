/* Inicializar proyecto */
require('dotenv').config()

/* express */
const express = require('express')
const cors = require('cors')
const app = express()
const { dbConnect } = require('./config/mongo') // Importamos la conexion
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

/* importamos las rutas */
app.use('/api/1.0', require('./app/routes')) //Obtiene el index.js (por defecto ya toma el index  "./app/routes/index")

dbConnect() //nos conectamos a la base de datos de mongo
/* Inicializamos o arrancamos la aplicación */
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});