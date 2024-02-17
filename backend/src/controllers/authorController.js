const Author = require('../models/authorModel')
const ApiError = require('../error/ApiError')


class AuthorController {
    async createAuthor(req, res , next) {
        try{
            let genre = await Author.findGenre(req.body.genre_id)
            if(!genre){
                return next(ApiError.badRequest('genre id is not found'))
            }
            const authorCreate = await Author.createAuthor(req.body, req.files)
            return res.status(201).json(authorCreate)
        }
        catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }

    async getAuthorByGenreId(req,res,next){
        try{
            let genre = await Author.findGenre(req.params.id)
            if(!genre){
                return next(ApiError.badRequest('genre id is not found'))
            }
            const getAuthors = await Author.getAuthorByGenreId(req.params)
            return res.status(201).json(getAuthors)
        }
        catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }

    async getAuthorById(req,res,next){
        try{
            const getAuthor = await Author.getAuthorById(req.params)
            return res.status(201).json(getAuthor)
        }
        catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }

    async getAuthorBooks(req,res,next){
        try{
            const getAuthorBooks = await Author.getAuthorBooks(req.params)
            return res.status(201).json(getAuthorBooks)
        }
        catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }

    async deleteAuthor(req,res,next){
        try{
            const getAuthor = await Author.getAuthorBooks(req.params)
            if(getAuthor.length){
                return next(ApiError.badRequest(`This author has books, you can't delete this author`))
            }
            const author = await Author.deleteAuthorById(req.params)
            return res.status(201).json(author)
        }
        catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }

    async getAuthorByQuery(req,res,next){
        try{
            const author = await Author.getAuthorByQuery(req.query)
            return res.status(201).json(author)
        }
        catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }
    
}

module.exports = new AuthorController()