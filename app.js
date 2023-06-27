const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('votre reponse next');
    next();
});

app.use((req,res,next)=>{
    res.status(201);
    next();
});


app.use((req,res,next)=>{
    res.json({message:'votre groupe'});
next();
});
app.use((req,res)=>{
    console.log('votre reponse envoyee avec succes');

});


module.exports = app;