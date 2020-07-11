const db = require('../config/mongoose');
const Notes = require('../models/note');

module.exports.delete = function(req,res){
    var id = req.body;
    var count = Object.keys(id).length;
    if(count==0){
        return res.redirect('/');
    }

    for(var i=0;i<count;i++){
        Notes.findByIdAndDelete(Object.keys(id)[i],function(err){           //Deleteing Note from list
            if(err){
                console.log("Error on deleting the task from list");
                return;
            }
            console.log(Object.keys(id)[i]);
        })
           
    }
    return res.redirect('/');
}