const { fetch , fetchAll } = require('../../lib/connectdb')
const { FINDONE , CREATE_USER , FINDP , GETCURRENTUSER , UPDATECURRENTUSERACCOUNT , FIND , UPDATESECURITY}  =require('./model')
const { v4  }  = require('uuid')
const path = require('path')
class UserModel {
    async findOne(email){
        let find = await fetch(FINDONE ,email)
        return find
    }

    async find(email , id){
        let find = await fetch(FIND , id, email)
        return find
    }

    async findP(id){
        let find = await fetch(FINDP , id)
        return find
    }

    async create({first_name , last_name , phone , email , password}){
        let user = await fetch(CREATE_USER , first_name , last_name , phone , email , password)
        return user
    }

    async getMe(me){
        return await fetch(GETCURRENTUSER , me.id)
    }

    async updateAccount({first_name , last_name , phone } , {image} , {id}){
        let userImage = v4()+'.'+image.name.replace(/\s/g," ").split('.')[1]
        let update = await fetch(UPDATECURRENTUSERACCOUNT , first_name , last_name , phone  , userImage,id)

        image.mv(path.join(process.cwd(),'src', "static" , userImage) , (err) =>{
            if(err){
                console.log(err)
            }	
        })
        return update
    }

   async updateSecurity(id , newHashPassword , email){
    return await fetch(UPDATESECURITY , id , newHashPassword , email)
   }
}

module.exports = new UserModel()