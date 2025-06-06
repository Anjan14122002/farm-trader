const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
// const {registerUser} = require('./controllers/userController');
const errorMiddlerware = require("./middleware/error")

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: true,
    // origin: 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],      // Allow only GET and POST requests
    // allowedHeaders: ['*'], // Allow only specific headers
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'], // Allow only specific headers
    credentials:true
  }));


const userRoutes = require('./routes/userRoute');
const equipmentRoutes = require('./routes/equipmentRoute');

app.get('/', (req, res) => {
    // app.render("Hello There");
    res.send('<h1>Hello MF</h1>')
});

// app.post('/api/v1/register', registerUser);

app.use('/api/v1', userRoutes);
app.use('/api/v1', equipmentRoutes);

app.use(errorMiddlerware);
 

module.exports = app