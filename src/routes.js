const express = require('express');
const router = express.Router();
const animesController = require('../controller/animes')

router.get('/', animesController.getAnimeList)

router.get('/add-animes', animesController.getAddAnime)

router.post('/add-anime', animesController.postAnime)

module.exports = router