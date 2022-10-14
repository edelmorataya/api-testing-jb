const jwt = require('jsonwebtoken');

const token = "estetokenestunaprueba1234";

module.exports = (req, res, next

) => {
    try{
    //const decoded =jwt.verify(req.body.token, token );
    
        next();
   
} catch (error) {
    return res.status(401).json({
        message: 'Auth failed'
    });
}

}