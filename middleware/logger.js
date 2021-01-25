// Middleware: logger to return accessed url
const logger = function (req, res, next) {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
};

module.exports = logger;