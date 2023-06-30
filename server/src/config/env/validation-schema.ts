import joi from 'joi';

export const validationSchema = joi.object({
    // NODE_ENV: joi.string().valid('DEVELOPMENT', 'PRODUCTION').required(),
});
