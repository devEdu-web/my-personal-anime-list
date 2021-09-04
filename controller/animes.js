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
        path: '/add-anime',
        isEditing: false
    })
}

exports.postAnime = (req, res, next) => {
    // { title: 'Tuts', score: '9', comments: 'Good', situation: 'completed' }
    const incomingAnime = {
        title: req.body.title,
        score: req.body.score,
        comments: req.body.comments, 
        situation: req.body.situation,
        imgUrl: req.body.imageUrl
    }
    const currentAnime = new Anime(null, incomingAnime.title, incomingAnime.situation, incomingAnime.score, incomingAnime.comments, incomingAnime.imgUrl)
    currentAnime.save()

    // console.log()
    res.redirect('/')
}

exports.deleteAnime = (req, res, next) => {
    const animeId = req.body.animeId
    Anime.delete(animeId, () => {
        res.redirect('/')
    })
}

exports.editAnimePage = (req, res, next) => {
    const animeId = req.params.animeId
    const isEdited = req.query.edit

    if(!isEdited) {
        // res.redirect('/')
        res.send('tá falso mano')
    } else {
        Anime.findAnimeById(animeId, anime => {
            res.render('add-animes', {
                path: '/edit-anime',
                isEditing: true,
                anime: anime
            })
        })
    }

}

exports.editAnime = (req, res, next) => {
    const animeInfo = req.body
    
    // res.send(animeInfo)
    const updatedAnime = new Anime(animeInfo.animeId, animeInfo.title, animeInfo.situation, animeInfo.score, animeInfo.comments, animeInfo.imageUrl)
    updatedAnime.save()
    res.redirect('/')
}