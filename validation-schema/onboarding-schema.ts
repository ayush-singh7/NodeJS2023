// import Joi from "joi";
const Joi = require('joi').extend(require('@joi/date'));

export const registerSchema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}).required(),
    password: Joi.string().token().min(8).max(30).required(),
    first_name: Joi.string().pattern(new RegExp('^[a-zA-Z]*$')).min(2).max(30).required(),
    last_name: Joi.string().pattern(new RegExp('^[a-zA-Z]*$')).min(2).max(30).required(),
    dob: Joi.date().format('YYYY-MM-DD').utc().required().less('2010-01-01'),
    gender: Joi.string().valid('M','F').required(), 
})


export const loginSchema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}).required(),
    password:Joi.string().min(8).max(30).required()
})


export const updateSchema = Joi.object({
    first_name: Joi.string().pattern(new RegExp('^[a-zA-Z]*$')).min(2).max(30).required(),
    last_name: Joi.string().pattern(new RegExp('^[a-zA-Z]*$')).min(2).max(30).required(),
    dob: Joi.date().format('YYYY-MM-DD').utc().required().less('2010-01-01'),
})


// alpha bets only regex "^[a-zA-Z]*$" and _ string.token()

// email done
// password alphanum string.token()
// name done
// dob done
// gender  done // .valid())

// const {email, first_name, last_name, dob, password, gender } = req.body;
//         if(!email || !first_name || !last_name || !dob || !password || !gender){
//             throw new Error("Please enter all credentials")
//         }