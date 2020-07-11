const db = require('../config/mongoose');
const Notes = require('../models/note');


module.exports.create = function(req,res){
    Notes.create({
        description:req.body.description,
       tag: req.body.tag,
       date:req.body.date                                       //Creating entry into database of newNote
    },function(err,newNote){

        if(err){
            console.log('Error in creating Note');
            return;
        }
        console.log('*******',newNote);                         //checking on console if note created
        return res.redirect('/');                               //redirecting to home page

    });
}