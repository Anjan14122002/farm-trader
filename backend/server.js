const app = require('./app');
const path = require("path");

const dotenv = require('dotenv');
const connection = require('./config/database');

// Handling Uncaught Exception
process.on('uncaughtException', (err) => {
    console.log(err);
    // console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaught exception`);
    process.exit(1)
})
//config
try {
    const envFilePath = path.resolve(__dirname, 'config/config.env');
    console.log(envFilePath);
    dotenv.config({path: envFilePath});
}
catch(err) {
    console.log("Dot Env Error:", err);
}
connection()
const server = app.listen(process.env.PORT,() => console.log(`server working at port ${process.env.PORT}`));

// Unhandled Promis Rejection
process.on("unhandledRejection", (err) => {
    // debugger;
    // console.log(`Error: ${err.message}`);
console.log(err.name)
    console.log(err.message);
    // console.log(err.errors);
    // console.log(err.body);
    // console.log(Object.getOwnPropertyDescriptors(err));
    // console.log(err._message);
    // console.dir(err);
    console.log("shutting down the server due to unhandled Promise Rejctions");
    // debugger;
    // server.close(() => {
    //     console.log("Server Closed"); 
    //     process.exit(1);
    // })
    server.close();
    process.exit(1);
})

