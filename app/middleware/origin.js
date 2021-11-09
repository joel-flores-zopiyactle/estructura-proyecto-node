const checkOring = (req, res, next) => {
    const token = req.headers.authorization.split(' ').pop()

    if (token === "12345") {
        next();
    } else {
        res.status(409);
        res.send({error: 'Tu por aquí no pasas'});
    }

    //TODO: Oring
    console.log(req.headers);
    
}

module.exports = {checkOring}