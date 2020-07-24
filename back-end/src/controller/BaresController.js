const mongoose = require('mongoose')

const Bares = mongoose.model('Bares')

module.exports = {
    async getBares(req, res) {
        const bares = await Bares.find()

        return res.json(bares)
    },

    async postBares(req, res) {
        const bares = await Bares.create(req.body)

        return res.json(bares)
    }
}