const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const alatberatRoutes = require('./routes/alatberat')

app.use('/alatberat', alatberatRoutes)

mongoose.connect(process.env.DB_CONNECTION,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let db = mongoose.connection

//handle error
db.on('error',console.error.bind(console,'error Establishing a Database connection?'))
//handle succes
db.once('open',()=>{
    console.log('Database is Connected')
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
})