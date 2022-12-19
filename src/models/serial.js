const mongoose = require('mongoose')

const serialSchema = new mongoose.Schema({
    name: {type: String},
    year: {type: Number},
    totalSeasons: {type: Number},
    totalSeries: {type: Number},
})

const serial = new mongoose.model('serial', serialSchema)

module.exports = serial