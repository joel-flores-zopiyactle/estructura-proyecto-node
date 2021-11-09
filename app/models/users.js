const mongoose = require('mongoose');

/* 
    Estructuramos el modelo
*/
const UserScheme = new  mongoose.Schema({
    name: {
        type: String 
    },
    age: {
        type: Number
    },
    email: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
})
// Exportamos el modelo
module.exports = mongoose.model('users', UserScheme)