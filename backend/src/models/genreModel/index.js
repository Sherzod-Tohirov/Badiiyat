const { fetch , fetchAll } = require('../../lib/connectdb')
const { GETALLGENRE }  =require('./model')

class GenreModel {
    async getAllGenre(){
        return await fetchAll( GETALLGENRE)
    }
}

module.exports = new GenreModel()