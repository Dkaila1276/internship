require('dotenv').config({path :'./.env'});

MongoDB_URI = process.env.MongoDB_URI;
PORT = process.env.PORT;
SECRET_TOKEN = process.env.SECRET_TOKEN;

module.exports = {
    MongoDB_URI,
    PORT,
    SECRET_TOKEN
}