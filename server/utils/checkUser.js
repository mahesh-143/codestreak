const jwt = require('jsonwebtoken')
const BaseError = require('./BaseError')


module.exports = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if(!token) throw new BaseError(401,"Token not provided")
        if (token.startsWith('Bearer')) {
            token = token.split(" ")[1];
        }
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded) {
            res.locals.user = decoded;
            next();
        } else {
            throw BaseError(401, "Invalid")
        }
    } catch (error) {
        console.log('error');
        if(error instanceof jwt.TokenExpiredError) next(new BaseError(401, "Session expired"))
        next(error)
    }
}