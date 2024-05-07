function cors(req, res, next) {
    res.header('Access-Control-Allow-Origin', "localhost:3000");
    
    next();
} 
module.exports = cors;