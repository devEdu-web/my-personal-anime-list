
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, "..", "data", "anime.json")

const getAnimes = (callback) => {
    fs.readFile(filePath, (err, animes) => {
        if(err) {
            callback([])
        } else {
            callback(JSON.parse(animes))
        }
    })
}

module.exports = class Anime {
    constructor(title, situation, score, comments) {
        this.title = title,
        this.situation = situation,
        this.score = score,
        this.comments = comments
    }

    save() {
        this.id = Math.random().toString()
        getAnimes(animes => {
            animes.push(this)
            fs.writeFile(filePath, JSON.stringify(animes), (err) => {
                console.log(err)
            })
        })
    }

    static delete(id, callback) {
        getAnimes(animes => {
            const animeIndex = animes.findIndex(anime => anime.id === id)
            animes.splice(animeIndex, 1)
            const updatedAnimes = animes
            fs.writeFile(filePath, JSON.stringify(updatedAnimes), (err) => {
                if(err) {
                    console.log('vai se fude')
                } else {
                    callback()
                }
            })
        })
    }

    static fetchAllAnimes(callback) {
        getAnimes(callback)
    }

}