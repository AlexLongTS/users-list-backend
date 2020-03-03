// Import packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const helmet = require('helmet');

// Load in Users
const usersRoute = require('./routes/users');

require('dotenv/config');

const app = express();
const port = process.env.port || 8080 // Set port to load onto

// Load modules
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/users', usersRoute)

app.get('/', (req, res) => {
    res.send('Home')
})

// Connect to MongoDb Database
mongoose.connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, console.log(`Connected to Mongo database`))

// Host the server
app.listen(port, console.log(`Server is running on port: ${port}`))