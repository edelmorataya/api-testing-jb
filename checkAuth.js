const jwt = require('jsonwebtoken');

const token = "estetokenestunaprueba1234";

module.exports = (req, res, next

) => {
    const decoded =jwt.verify(req.body.token, token )
    next();

}