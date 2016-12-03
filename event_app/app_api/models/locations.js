var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    lat: Number,
    long: Number
    
});

mongoose.model('Location', locationSchema);