import Joi from "joi"

export const registerSchema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}).required(),
    userName:Joi.string().min(4).max(20).token().required(),
    password: Joi.string().token().min(8).max(30).required(),
    firstName: Joi.string().pattern(new RegExp('^[a-zA-Z]*$')).min(2).max(30).required(),
    lastName: Joi.string().pattern(new RegExp('^[a-zA-Z]*$')).min(2).max(30).required(),
})


export const loginSchema = Joi.object({
    userName:Joi.string().min(4).max(20).token().required(),
    password:Joi.string().min(8).max(30).required()
})