const express = require('express');
const routes = require('./routes');

const port = 80;
const app = express();

routes(app);

app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});



