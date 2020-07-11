const mongoose  = require('mongoose'); 


const noteSchema = new mongoose.Schema({

    description:{
        type: String,
        required: true
    },

    tag:{
        type: String,
        required:true
    },

    date:{
        type:Date,
        required:true
    }

});

const Notes = mongoose.model('Notes',noteSchema);

module.exports = Notes;