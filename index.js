const express = require('express');
const app = express();
const port = 8000;


app.use(express.urlencoded());              //Using middlewares
app.use('/',require('./routes'));


app.set('view engine','ejs');                   //Using Template Engines
app.set('views' ,'./views');

app.use(express.static('assets'));


app.listen(port,function(err){
    if(err){
        console.log(`Error in running on port: ${port}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);

})