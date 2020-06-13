const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 5000

app.use(express.static('public'))
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./routes')(app);

app.set('view engine','ejs')

app.listen(port,()=>{
	console.log(`server is running on ${port}`)
})