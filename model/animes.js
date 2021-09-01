
const { json } = require('express');
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
    constructor(id, title, situation, score, comments) {
        this.id = id
        this.title = title,
        this.situation = situation,
        this.score = score,
        this.comments = comments
    }

    save() {
        
        getAnimes(animes => {
            if(this.id) {
                const existingAnimeIndex = animes.findIndex(anime => Number(anime.id) === Number(this.id))
                const updatedAnimes = [...animes]
                updatedAnimes[existingAnimeIndex] = this
                fs.writeFile(filePath, JSON.stringify(updatedAnimes), (err) => {
                    if(err) {
                        console.log(err)
                    }
                }) 

            } else {
                console.log(this)
                this.id = Math.random().toString()
                animes.push(this)
                fs.writeFile(filePath, JSON.stringify(animes), (err) => {
                    console.log(err)
                })
            }

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

    static findAnimeById(id, callback) {
        getAnimes(animes => {
            const anime = animes.find(anime => anime.id === id)
            callback(anime)
        })
    }

}