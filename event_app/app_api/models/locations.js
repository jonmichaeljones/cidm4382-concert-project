var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
    cityAddress: String,
    city: String,
    state: String,
    cityLat: Number,
    cityLong: Number
    
});

mongoose.model('Location', locationSchema);