import Joi from "joi";

export const userValidator = Joi.object({
    username:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'username can only contain letters and must be between 1 and 20 characters'
   })
});
  
