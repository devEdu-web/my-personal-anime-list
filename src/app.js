const express = require('express');
const app = express();
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "..", "views"))

app.use(express.urlencoded({extended: true}))
express.static(path.join(__dirname, "..", "public"))



module.exports = app