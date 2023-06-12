const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const alatberatRoutes = require('./routes/alatberat')
const sukucadangRoutes = require('./routes/sukucadang')

app.use('/alatberat', alatberatRoutes)
app.use('/sukucadang', sukucadangRoutes)

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