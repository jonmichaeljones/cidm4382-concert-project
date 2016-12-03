var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
    cityAddress: String,
    city: String,
    state: String,
    cityZip: Number, 
    cityLat: Number,
    cityLong: Number,
    cityWebsite: String
    
});

mongoose.model('Location', locationSchema, 'locations');