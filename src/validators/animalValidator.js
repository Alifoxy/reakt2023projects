import Joi from "joi";

export const animalValidator = Joi.object({
    cat_name:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'username can only contain letters and must be between 1 and 20 characters',
    }),
    cat_breed:Joi.string().allow(['siamese','ragdoll','maine coon','persian','british','bengal','russian blue','scottish fold','tonkinese','siberian','no breed','other']).required().messages({
        'string.pattern.base': 'breed was not found; possible variants: siamese, ragdoll, maine coon, persian, british, bengal, russian blue, scottish fold, tonkinese, siberian, no breed, other'
    }),
    dog_name:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'username can only contain letters and must be between 1 and 20 characters',
    }),
    dog_breed:Joi.string().allow(['golden retriever','german shepherd','doberman pinscher','poodle','bulldog','beagle','rottweiler','yorkshire terrier','siberian husky','chihuahua','no breed','other']).required().messages({
        'string.pattern.base': 'breed was not found; possible variants: golden retriever, german shepherd, doberman pinscher, poodle, bulldog, beagle, rottweiler, yorkshire terrier, siberian husky, chihuahua, no breed, other'
    })
});



