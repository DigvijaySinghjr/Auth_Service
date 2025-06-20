const express = require('express');

const { PORT } = require('./config/serverConfig');

const app = express();

const prepareAndStartSrver = () => {

    app.listen(PORT, () => {
         console.log(`Server started at ${PORT}`);
    });
}

prepareAndStartSrver();