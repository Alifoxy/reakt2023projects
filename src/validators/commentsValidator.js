import Joi from "joi";

export const commentsValidator = Joi.object({
    name:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,100}$/).required().messages({
        'string.pattern.base':'comment can only contain letters and must be between 1 and 100 characters'
   })
});
  
