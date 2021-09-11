const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/decodirino-DB')
    .then(()=>{
        console.log("Connected to database");
    })
    .catch(error=>{
        console.error("Could not connect to database",error);
    })

