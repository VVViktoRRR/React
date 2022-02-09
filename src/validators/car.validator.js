import Joi from "joi";

export const CarValidator = Joi.object( {
    model: Joi.string().regex(new RegExp('[[a-zA-ZА-яёЁіІїЇ]{1,20}$')).required().messages({
        'string.empty': '"model" не может быть пустым полем',
        'string.pattern.base':'Только буквы от 1й до 20-ти'
    }),
    price: Joi.number().min(0).max(100000).messages({
        'number.base':'цена от 1 до 1 000 000',
        'number.min':'цена должна быть больше НОЛЯ',
        'number.max':'цена должна быть меньше  1 000 000',
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.base':'Год от 1900 до нынешнего',
        'number.min':'Год должен быть больше 1990',
        'number.max':'Год должен быть не больше нынешнего',
    }),
})

