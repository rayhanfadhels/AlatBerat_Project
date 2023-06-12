const mongoose = require('mongoose')

const SukuCadangSchema = mongoose.Schema({
    NamaSukuCadang: {
        type: String,
        required: true
    },
    Merk: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    Harga: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default:
            Date.now
    }
})
module.exports = mongoose.model('SukuCadang', SukuCadangSchema)