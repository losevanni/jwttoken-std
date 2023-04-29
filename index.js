const express = require('express');
const app = express();
const router=express.Router();
const http=require('http');
const bodyParser=require('body-parser');
const ejs=require('ejs');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(express.static(__dirname+'/'));

const record=require('./routes/record'); 

app.use('/',record);

const server=http.createServer(app);

const PORT=8080;
var myhost="http://132.226.22.68:";

server.listen(PORT,()=>{

    console.log('Server is working : PORT - ',myhost+PORT);
});


