import express from 'express';
import open from 'open';

/* eslint-disable no-console */

const port = process.env.Port || 3000;
const app = express();

const translate = require('translate-api');

let transUrl = 'https://nodejs.org/en/';
translate.getPage(transUrl).then(function(htmlStr){
    console.log(htmlStr.length)
});

let transText = 'hello world!';
translate.getText(transText,{to: 'zh-CN'}).then(function(text){
    console.log(text)
});

app.get('/', function (req,res) {
    res.send(transText);
});


app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});
