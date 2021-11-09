const express = require('express'); 
const router = express.Router()
const checkOring = require('../middleware/origin')

//importa los controlodaotes
const {getItems, getItem, createItem, updateItem, deleteItem} = require('../controllers/users')

// TODO: localhost/users/  ---> LISTA
router.get('/', checkOring, getItems);

// TODO: localhost/users/:id  ---> DETALLE
router.get('/:id', checkOring, getItem);
router.post('/', checkOring, createItem);
router.patch('/:id', updateItem);
router.delete('/:id', deleteItem);


module.exports = router