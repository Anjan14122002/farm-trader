const mongoose = require('mongoose');

const connection = () => {
    console.log(process.env.MONGO_URL);
    mongoose  
        .connect(process.env.MONGO_URL,{ dbName: 'Ecommerce' })
        .then(() => console.log("database connected!"))
        .catch((e) => console.log(e));
}

module.exports = connection;