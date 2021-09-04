const express = require('express');
const router = express.Router();
const animesController = require('../controller/animes')
const cors = require('cors')

router.use(cors({origin: 'localhost:3000'}))

router.get('/', animesController.getAnimeList)

router.get('/add-animes', animesController.getAddAnime)

router.post('/add-anime', animesController.postAnime)

router.get('/edit-anime/:animeId', animesController.editAnimePage)

router.post('/edit-anime', animesController.editAnime)

router.post('/delete-anime', animesController.deleteAnime)

module.exports = router