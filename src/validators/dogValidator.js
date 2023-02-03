import Joi from "joi";

export const dogValidator = Joi.object({
    dog_name:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'username can only contain letters and must be between 1 and 20 characters',
    }),
    dog_breed:Joi.array().items(Joi.string().valid(['golden retriever','german shepherd','doberman pinscher','poodle','bulldog','beagle','rottweiler','yorkshire terrier','siberian husky','chihuahua','no breed','other'])).required().messages({
        'string.pattern.base': 'breed was not found; possible variants: golden retriever, german shepherd, doberman pinscher, poodle, bulldog, beagle, rottweiler, yorkshire terrier, siberian husky, chihuahua, no breed, other'
    })
});