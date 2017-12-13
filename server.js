import express from 'express';
import open from 'open';

const port = process.env.Port || 3000;
const app = express();

const translate = require('translate-api');

let transText = 'what are you talking about?';
translate.getText(transText,{to: 'zh-CN'}).then(function(text){
    console.log(text.text)
});

app.get('/', function (req,res) {
    res.send(transText);
});
