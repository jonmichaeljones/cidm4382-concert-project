var mongoose = require('mongoose');
var Loc = mongoose.model('Location')

//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
}


module.exports.locationsReadAll = function(req, res)
{
  console.log("Finding location details", req);
  
  Loc
    .find({})
    .exec(function(err, location){
      if(err){
        console.log(err);
        sendJSONresponse(res, 404, err);
      }
      console.log(location);
      sendJSONresponse(res, 200, location);
    });
}