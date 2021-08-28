const Anime = require('../model/animes')
// const Animes = require('../model/animes')

exports.getAnimeList = (req, res, next) => {
    Anime.fetchAllAnimes(animes => {
        res.render('index.ejs', {
            animes: animes
        })
    })
}

exports.getAddAnime = (req, res, next) => {
    res.render('add-animes.ejs')
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



/* 
Se perguntando onde parou? Eu te explico:

Suas últimas alterações foram: 
    - Você adicionou a pasta Data, com um arquivo json
    - Você criou o objeto anime
    - Você criou o método save, que salva o anime no arquivo json
    - Lembrando que voce ainda não deu commit

O que você vai fazer agora?
    - Renderizar os animes do arquivo em json na tua lista
    - Para renderizar um anime, claro que tu tem que ler todos os arquivos novamente
    - Adicionar métodos como apagar um anime
    
    
*/