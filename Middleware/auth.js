const jwt = require ('jsonwebtoken');

module.exports = function(req, res, next){
    //Leer el token del header
        const token = req.header('x-auth-token');
        console.log(token)

    //REvisar si no hay token
        if(!token){
            return res.status(402).json({msg:'No hay Token, permiso no valido'})
        }
    //validar el token

    try {
        const cifrado = jwt.verify(token, process.env.SECRETA)
        req.usuario = cifrado.usuario;
        next();
    } catch (error) {
        res.status(401).json({msg: 'Token no valido'});
    }
}