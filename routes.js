const users = require('./components/users/route');

module.exports = (app) => {
    app.use(`/users`, users);
}