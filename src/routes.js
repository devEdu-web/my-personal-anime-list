const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.render('index.ejs')
})

router.get('/add-animes', (req, res, next) => {
    res.render('add-animes.ejs')
})

module.exports = router