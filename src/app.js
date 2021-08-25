const express = require('express');
const app = express();
const path = require('path')
const routes = require('./routes')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "..", "views"))

app.use(express.static(path.join(__dirname, "..", "public")))
app.use(express.urlencoded({extended: true}))
app.use('/', routes)



module.exports = app