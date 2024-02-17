const { fetch , fetchAll } = require('../../lib/connectdb')
const { CREATE_BOOK, GETBOOKBYGENREID,  GETBOOKBYID , DELETEBOOKBYID , GETBOOKBYQUERY}  =require('./model')
const { v4  }  = require('uuid')
const path = require('path')

class BookModel {
    async createBook({title,page,year,price,genre_id,author_id,description} , {image}){
        let bookName = v4()+'.'+image.name.replace(/\s/g," ").split('.')[1]
        let book = await fetch(CREATE_BOOK , title,page,year,price,genre_id,author_id,description , bookName)
        image.mv(path.join(process.cwd(),'src', "static" , bookName) , (err) =>{
            if(err){
                console.log(err)
            }	
        })
        return book
    }

    async getBookByGenreId({id}){
        return await fetchAll(GETBOOKBYGENREID , id)
    }

    async getBookById({id}){
        return await fetch(GETBOOKBYID , id)
    }

    async getBookByQuery({book}){
        return await fetchAll(GETBOOKBYQUERY , '%'+book.toLowerCase().trim()+'%')
    }

    async deleteBookById({id}){
        await fetch(DELETEBOOKBYID , id)
        return 'deleted book'
    }
}

module.exports = new BookModel()