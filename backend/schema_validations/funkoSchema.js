/*eslint-disable max-len*/ 
const Joi = require('joi');
const { message } = require('./userScheme');


const funkoSchema = Joi.object(
  {
    name: Joi.string().min(3).max(30).required().message(
      {
        'string.base': 'El nombre tiene que ser un String',
        'string.empty': 'El nombre no puede estar vacío',
        'any.required': 'El nombre es un campo requerido',
        'string.min': 'El nombre debe tener como minimo 3 carácteres',
        'string.max': 'El nombre debe tener como maximo 30 caracteres',
      }
    ),
    category: Joi.string().min(5).max(30).required().message(
      {
        'string.base': 'La categoria tiene que ser un String',
        'string.empty': 'La categoria no puede estar vacía',
        'any.required': 'La categoria es un campo requerido',
        'string.min': 'La categoria debe tener como minimo 5 carácteres',
        'string.max': 'La categoria debe tener como maximo 30 caracteres',
      }
    ),
      ilimited: Joi.bool().message(
      {
        'bool.base': 'El campo ilimitado tiene que ser de tipo bool',
        'bool.empty': 'El campo ilimitado  no puede estar vacía',
        'any.required': 'El campo ilimitado es requerido',
      }
    ),
      price: Joi.number().min(2).max(30).required().message(
      {
        'number.base': 'El precio tiene que ser un número',
        'number.empty': 'El precio no puede estar vacío',
        'any.required': 'El precio es un campo requerido',
        'number.min': 'El precio debe tener como minimo 5 digitos',
        'number.max': 'El precio debe tener como maximo 30 digitos',
      }
    ),
      collection: Joi.string().min(5).max(30).required().message(
      {
        'string.base': 'La colección tiene que ser un String',
        'string.empty': 'La colección  no puede estar vacía',
        'any.required': 'La colección  es un campo requerido',
        'string.min': 'La colección  debe tener como minimo 5 carácteres',
        'string.max': 'La colección  debe tener como maximo 30 caracteres',
      }
      ),
  }
)