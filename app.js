const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('config');
require('./src/database');
const app=express();
const auth = require("./src/middlewares/AuthMiddleware");
const port=8000;

if (!config.get('privateKey')) {
    console.error('FATAL ERROR: privateKey is not defined')
    process.exit(1);
}

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, 'public')))
require('./src/database')

const UserRegistration = require('./src/routes/api/Users/RegistrationRoute')
const UsersRoute = require('./src/routes/api/Users/UsersRoute')

const ProjectAPI = require('./src/routes/api/ProjectsAPI');
const MessageAPI = require('./src/routes/api/MessageAPI');
const ArticleAPI = require('./src/routes/api/ArticleAPI');

app.use('/user-panel/', UserRegistration)
app.use('/user-panel/',auth, UsersRoute)

app.use('/',ProjectAPI);
app.use('/',MessageAPI);
app.use('/',ArticleAPI);



app.get("/",(req,res)=>{
    res.send("this is root");
});

app.listen(port,()=>{
    console.log(`server is ready on port ${port}`);
})


