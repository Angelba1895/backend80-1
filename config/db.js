const mongoose = require('mongoose');
require('dotenv').config();

const ConectarBD = () => {
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('Estamos conectados con mongoDB'))
    .catch((err) => console.error(err));
}

module.exports = ConectarBD;