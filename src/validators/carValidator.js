import Joi from "joi";

export const carValidator = Joi.object({
        brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
                'string.pattern.base': 'username can only contain letters and must be between 1 and 20 characters',
        })
        price: Joi.number().min(0).max(1000000).required(),
        year: Joi.number().min(1990).max(new Date().getFullYear()).required()
});
  
