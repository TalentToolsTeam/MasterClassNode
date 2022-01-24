const controller = require('./controller');

module.exports.getMessage = async(req, res, next) => {
    try {
        const results = await controller.getMessage();
        res.send(results);
    } catch (e) {
        next(e);
    }
};

module.exports.getCustomMessage = async(req, res, next) => {
    try {
        const results = await controller.getCustomMessage(req.params);
        res.send(results);
    } catch (e) {
        next(e);
    }
};