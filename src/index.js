const express = require('express');
import app from './server/app';

// database
//require('./database');

// starting the server
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});