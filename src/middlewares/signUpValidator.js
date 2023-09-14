// const res = require('express/lib/response');
const Joi = require('joi');

const signUpValidator = (req, res, next) => {
    const schema = Joi.object({

        name: Joi.string().min(3).max(15).required().messages({
            'string.name': "El campo nombre deberia ser un texto",
            'string.empty': "El campo nombre es requerido",
            'string.min': "El campo nombre requiere 3 caracteres como minimo"
        }),
        lastname: Joi.string().min(3).max(15).required().messages({
            'string.lastname': "El campo apellido deberia ser un texto",
            'string.empty': "El campo apellido es requerido",
            'string.min': "El campo apellido requiere 3 caracteres como minimo"
        }),
        image: Joi.string().required().uri(),
        country: Joi.string().min(3).max(20),
        email: Joi.string().required().email(),
        password: Joi.string().min(3).max(20).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        is_online: Joi.boolean()
    })

    const validate = schema.validate(req.body, { abortEarly: false })

    if (validate.error) {
       return res.json({ success: false, errors: validate.error.details })
    }

    next()
}


module.exports = {signUpValidator}