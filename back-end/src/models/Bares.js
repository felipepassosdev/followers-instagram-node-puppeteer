const mongoose = require('mongoose')

const BaresSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    data: {
        type: Date
    },
    localizacao: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    horario: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true
    }
})

mongoose.model('Bares', BaresSchema);