const { fetch , fetchAll } = require('../../lib/connectdb')
const { CREATE_AUTHOR , GENRE , GETAUTHORLIKE, GETAUTHORBYGENREID , GETAUTHORBYID , DELETEAUTHORBYID , GETAUTHORBOOK }  =require('./model')
const { v4  }  = require('uuid')
const path = require('path')

class AuthorModel {
    async createAuthor({first_name , last_name , date_of_birth ,date_of_death ,country ,bio , genre_id } , {image}){
        let authorName = v4()+'.'+image.name.replace(/\s/g," ").split('.')[1]
        let author = await fetch(CREATE_AUTHOR , first_name , last_name , date_of_birth , date_of_death , country , bio , authorName , genre_id)

        image.mv(path.join(process.cwd(),'src', "static" , authorName) , (err) =>{
            if(err){
                console.log(err)
            }	
        })
        return author
    }

    async findGenre(id){
        return await fetch(GENRE , id)
    }

    async getAuthorByGenreId({id}){
        return await fetchAll(GETAUTHORBYGENREID , id)
    }

    async getAuthorById({id}){
        return await fetch(GETAUTHORBYID , id)
    }

    async getAuthorBooks({id}){
        return await fetchAll(GETAUTHORBOOK , id)
    }

    async getAuthorByQuery({author}){
        return await fetchAll(GETAUTHORLIKE,'%'+author.toLowerCase().trim()+'%')
    }

    async deleteAuthorById({id}){
        await fetch(DELETEAUTHORBYID , id)
        return 'delete author'
    }
}

module.exports = new AuthorModel()