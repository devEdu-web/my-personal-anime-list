const Anime = require('../model/animes')
// const Animes = require('../model/animes')

exports.getAnimeList = (req, res, next) => {
    Anime.fetchAllAnimes(animes => {
        res.render('index.ejs', {
            animes: animes,
            path: '/anime-list'
        })
    })
}

exports.getAddAnime = (req, res, next) => {
    res.render('add-animes.ejs', {
        path: '/add-anime'
    })
}

exports.postAnime = (req, res, next) => {
    // { title: 'Tuts', score: '9', comments: 'Good', situation: 'completed' }
    const incomingAnime = {
        title: req.body.title,
        score: req.body.score,
        comments: req.body.comments, 
        situation: req.body.situation
    }
    const currentAnime = new Anime(incomingAnime.title, incomingAnime.situation, incomingAnime.score, incomingAnime.comments)
    currentAnime.save()

    // console.log()
    res.redirect('/')
}

exports.deleteAnime = (req, res, next) => {
    const animeId = req.params.animeId
    Anime.delete(animeId, () => {
        res.redirect('/')
    })
    // res.redirect('/')
}
