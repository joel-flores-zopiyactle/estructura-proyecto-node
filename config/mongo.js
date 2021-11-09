const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_URI = process.env.DB_URI
    mongose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res)    => {
        if(!err) {
            console.log('**** CONEXION ESTABLECIDA ****');
        } else {
            console.log('**** ERROR AL REALIZAR LA CONEXION ****');
        }
    })
}

module.exports = { dbConnect }