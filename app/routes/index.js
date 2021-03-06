const express = require('express');
const router = express.Router();
const fs = require('fs')

const pathRouter = `${__dirname}`;

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}


fs.readdirSync(pathRouter).filter((file) => {
   /*  console.log('-----> ', file); */
   /* console.log('--->', removeExtension(file)); */
   const fileWithOutEXt = removeExtension(file)
   const skip = ['index'].includes(fileWithOutEXt)
   if (!skip) {
       router.use(`/${fileWithOutEXt}`, require(`./${fileWithOutEXt}`)) //TODO: localhost/users
       console.log('CARGAR RUTA ---->', fileWithOutEXt);
   }
})

router.get('*', (req, res) => {
    res.status(404);
    res.send({
        error: 'No Found'
    });
}) 

module.exports = router

