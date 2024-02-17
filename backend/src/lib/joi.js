const { not } = require("joi");
const Joi = require("joi");



exports.loginSchema = Joi.object({
    email:Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
});


exports.registerSchema = Joi.object({
    first_name: Joi.string().min(3).max(30).required(),
    last_name: Joi.string().min(3).max(30).required(),
    phone: Joi.string().length(9).pattern(/^[0-9]+$/),
    email:Joi.string().max(50).email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
});

exports.updateProfileSchema = Joi.object({
    first_name: Joi.string().min(3).max(30).required(),
    last_name: Joi.string().min(3).max(30).required(),
    phone: Joi.string().length(9).pattern(/^[0-9]+$/),
});

exports.updateSecuritySchema = Joi.object({
    currentPassword: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    newPassword: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    email:Joi.string().max(50).email().required(),
});

exports.authorSchema = Joi.object({
    first_name: Joi.string().min(3).max(20).required(),
    last_name: Joi.string().min(3).max(20).required(),
    date_of_birth:Joi.number().integer().min(0).max(2023).required(),
    date_of_death:Joi.number().integer().min(0).max(2023).required(),
    country:Joi.string().min(2).max(20).required(),
    bio:Joi.string().min(2).max(1000).required(),
    genre_id:Joi.number().required(),
    image:Joi.object({
        type: Joi.string().valid("image/png", "image/jpeg" ),
      }).unknown(true),
})


exports.bookSchema = Joi.object({
    title: Joi.string().min(2).max(30).required(),
    page: Joi.string().min(1).max(10).required(),
    year:Joi.number().integer().min(0).max(2023).required(),
    price:Joi.number().integer().min(0).max(2023).required(),
    genre_id:Joi.number().required(),
    author_id:Joi.string().required(),
    description:Joi.string().max(1000).required(),
    image:Joi.object({
        type: Joi.string().valid("image/png", "image/jpeg" ),
      }).unknown(true),
})