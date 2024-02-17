const Author = require('../models/authorModel')
const Genre = require('../models/genreModel')
const ApiError = require('../error/ApiError')


class GenreController {
    async getAllGenre(req,res,next){
        try{
            const getGenre = await Genre.getAllGenre()
            return res.status(201).json(getGenre)
        }
        catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }

    
}

module.exports = new GenreController()