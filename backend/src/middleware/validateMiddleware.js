const { 
    loginSchema,
    registerSchema,
    authorSchema,
    bookSchema,
    updateProfileSchema,
    updateSecuritySchema
} = require("../lib/joi");

const validateLogin = (req, res, next) => {
    const data = loginSchema.validate(req.body);
    if(data.error) {
        res.status(403)
        .json({ message: data.error.details[0].message });
    } else {
        next();
    }
};

const validateUpdateProfile = (req,res,next) => {
    const data = updateProfileSchema.validate(req.body);
    if(data.error) {
        res.status(403)
        .json({ message: data.error.details[0].message });
    } else {
        next();
    }
}

const validateUpdateSecurity = (req,res,next) => {
    const data = updateSecuritySchema.validate(req.body);
    if(data.error) {
        res.status(403)
        .json({ message: data.error.details[0].message });
    } else {
        next();
    }
}



const validateRegister = (req, res, next) => {
    const data = registerSchema.validate(req.body);
    if(data.error) {
        res.status(403)
        .json({ message: data.error.details[0].message });
    } else {
        next();
    };
};

const validateAuthor = (req,res,next) => {
    const data = authorSchema.validate(req.body);
    if(data.error) {
        res.status(403)
        .json({ message: data.error.details[0].message });
    } else {
        next();
    };
}

const validateBook = (req,res,next) => {
    const data = bookSchema.validate(req.body);
    if(data.error) {
        res.status(403)
        .json({ message: data.error.details[0].message });
    } else {
        next();
    };
}



module.exports = {
    validateLogin , 
    validateRegister,
    validateAuthor,
    validateBook,
    validateUpdateProfile,
    validateUpdateSecurity
}