/* Imporat helpers */
const { httpErros } = require('../helpers/handleError')
const userModel = require('../models/users')

const getItems = (req, res) => {
    res.send({
        list: [1,2,3,4]
    });

}

const getItem = async (req, res) => {
    try {
        const listAll = await userModel.finf({})
        res.send({data: listAll});    
            
    } catch (error) {
        httpErros(res, error)
    }  
}

const createItem = async (req, res) =>  {

    try {

        const {name, age, email} = req.body;
        const resDetail = await userModel.create({
            name, age, email
        })

        res.send({data: resDetail});
        
    } catch (error) {
        httpErros(res, error)
    }    

}

const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }