import express from 'express';
import open from 'open';
import bodyParser from 'body-parser';

const port = process.env.Port || 3000;
const app = express();

const translate = require('translate-api');

let transText = 'what are you talking about?';
let result;
translate.getText(transText,{to: 'zh-CN'}).then(function(text){
    console.log(text.text)
    result = text.text;
});

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
router.get('/', function(req, res) {
    res.json({ translation: result });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);


