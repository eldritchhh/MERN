// Formato dei dati che metti nel DB 
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    name : {
        type : String,
        requred : true
    }, 
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = Item =  mongoose.model('item', ItemSchema)