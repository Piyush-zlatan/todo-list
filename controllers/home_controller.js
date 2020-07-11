const db = require('../config/mongoose');
const Notes = require('../models/note');

module.exports.home = function(req,res){
  Notes.find({},function(err,notes){

      if(err){
        console.log('error in finding Notes');
        return;
      }
      return res.render('home',{
        title: 'Home',
        notes_list: notes
    });
  })

 
}