const User = require('../models/userModel')
const { sign } = require('../lib/jwt')
const bcrypt = require('bcrypt')
const ApiError = require('../error/ApiError')


class UserController {
    async register(req, res , next) {
        try{
            const { first_name,last_name,phone,email,password } = req.body
            const candidate = await User.findOne(email)
            if(candidate){
                return next(ApiError.badRequest('This email already exists'))
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const userCreate = await User.create({first_name , last_name , phone , email , password:hashPassword })
            return res.status(201).json({token:sign(userCreate)})
        }
        catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }
    async login(req,res , next){
        try{
            const { email, password } = req.body
            const candidate= await User.findOne(email)
            if(!candidate){
                return next(ApiError.internal('User is not found'))
            }
            let comparePassword = bcrypt.compareSync(password, candidate.password)
            if (!comparePassword) {
                return next(ApiError.internal('Wrong password specified'))
            }
            return res.status(201).json({token:sign(candidate)})
        }
        catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }

    async getMe(req,res , next){
        try{
            const me = await User.getMe(req.user)
            return res.status(201).json(me)
        }
        catch(e){
            return next(ApiError.badRequest(e.message))
        }
    }

   async updateProfile(req,res,next){
        try{
            await User.updateAccount(req.body ,req.files , req.user)
            return res.status(201).json('updated')
        }
        catch(e){
            return next(ApiError.badRequest(e.message))
        }
   }

   async updateSecurity(req,res,next){
    try{
        const { currentPassword , newPassword , email} = req.body
        const candidate = await User.findOne(email)
        if(candidate){
            return next(ApiError.badRequest('This email already exists'))
        }
        const userPassword = await User.findP(req.user.id)
        let comparePassword = bcrypt.compareSync(currentPassword, userPassword.password)
        if (!comparePassword) {
            return next(ApiError.internal('Wrong current password specified'))
        }
        const hashPassword = await bcrypt.hash(newPassword, 5)
        await User.updateSecurity(req.user.id , hashPassword , userPassword.email)
        return res.status(201).json('updated')
    }
    catch(e){
        return next(ApiError.badRequest(e.message))
    }
   }
}

module.exports = new UserController()