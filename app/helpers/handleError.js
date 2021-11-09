const httpErros = (res, error) => {
    console.log(error);
    res.send(500);
    res.send({ error: 'Algo ocurrio'});
}

module.exports = { httpErros }