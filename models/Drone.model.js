// Iteration #1
const mongoose = require('mongoose')

const DroneSchema = new mongoose.Schema({
    title: String,
    propellers : Number,
    maxSpeed: Number 
})

const DroneModel = mongoose.model("Drone",DroneSchema)

module.exports = DroneModel

