import { Joi, schema } from 'express-validation';

export const userSignup: schema = {
    body: Joi.object({
        phone: Joi.string()
            .trim()
            .regex(/^[0-9]{8,12}$/)
            .allow(null),
        email: Joi.string().trim().email().allow(null),
    }).xor('phone', 'email'),
};
