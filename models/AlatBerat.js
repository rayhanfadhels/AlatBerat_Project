const mongoose = require('mongoose')

const AlatBeratSchema = mongoose.Schema({
    NamaAlatBerat: {
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
    Deskripsi: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default:
            Date.now
    }
})
module.exports = mongoose.model('AlatBerat', AlatBeratSchema)