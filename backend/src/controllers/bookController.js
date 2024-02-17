const Author = require('../models/authorModel')
const Book = require('../models/bookModel')
const ApiError = require('../error/ApiError')


class BookController {
    async createBook(req, res , next) {
        try{
            let genre = await Author.findGenre(req.body.genre_id)
            let author = await Author.getAuthorById({id:req.body.author_id})
            if(!genre){
                return next(ApiError.badRequest('genre id is not found'))
            }
            if(!author){
                return next(ApiError.badRequest('author id is not found'))
            }
            const BookCreate = await Book.createBook(req.body, req.files)
            return res.status(201).json(BookCreate)
        }
        catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }

    async getBookByGenreId(req,res,next){
        try{
            let genre = await Author.findGenre(req.params.id)
            if(!genre){
                return next(ApiError.badRequest('genre id is not found'))
            }
            const getBooks = await Book.getBookByGenreId(req.params)
            return res.status(201).json(getBooks)
        }
        catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }

    async getBookById(req,res,next){
        try{
            const getBook = await Book.getBookById(req.params)
            return res.status(201).json(getBook)
        }
        catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }

    async deleteBook(req,res,next){
        try{
            const getBook = await Book.getBookById(req.params)
            if(!getBook){
                return next(ApiError.badRequest('book id is not found'))
            }
            const book = await Book.deleteBookById(req.params)
            return res.status(201).json(book)
        }
        catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }
    
    async getBookByQuery(req,res,next){
        try{
            const book = await Book.getBookByQuery(req.query)
            return res.status(201).json(book)
        }
        catch(e){
            console.log(e)
            return next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new BookController()