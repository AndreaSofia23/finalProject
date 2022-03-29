/* eslint-disable max-len */
const Joi = require('joi');

const userScheme = Joi.object({
  firstName: Joi.string().min(3).max(12).required().messages({
    'string.base': 'El nombre tiene que ser un String',
    'string.empty': 'El nombre no puede estar vacío',
    'any.required': 'El nombre es un campo requerido',
    'string.min': 'El nombre debe tener como minimo 3 carácteres',
    'string.max': 'El nombre debe tener como maximo 30 caracteres',
  }),
  lastName: Joi.string().min(3).max(12).required().messages({
    'string.base': 'El apellido tiene que ser un String',
    'string.empty': 'El apellido no puede estar vacío',
    'any.required': 'El apellido es un campo requerido',
    'string.min': 'El apellido debe tener como minimo 3 carácteres',
    'string.max': 'El apellido debe tener como maximo 30 caracteres',
  }),
  userName: Joi.string()
    .pattern(new RegExp('^[A-Za-z][A-Za-z0-9_]{6,12}$'))
    .required()
    .messages({
      'string.pattern.base':
        'El usuario debe comenzar con una letra, puede ser alphanumerico y debera contener entre 7 y 12 caracteres',
    }),
  password: Joi.string()
    .pattern(new RegExp('[a-zA-Z0-9]{8,30}$'))
    .required()
    .messages({
      'string.pattern.base':
        'La contraseña puede ser alphanumerica y debera contener entre 8 y 30 caracteres',
    }),
  city: Joi.string().min(3).max(30).required().messages({
    'string.pattern.base': 'Dato invalido(city)',
  }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      maxDomainSegments: 2,
      tlds: { allow: false },
    })
    .required()
    .messages({
      'string.email': 'Ingrese una direccion de correo válida',
    }),
});

module.exports = userScheme;
