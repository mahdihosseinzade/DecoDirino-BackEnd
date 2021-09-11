const mongoos = require('mongoose');
const userSchema = require('../schemas/UserSchema');
const Joi = require ('joi');

const UserModel =mongoos.model('User' , userSchema);

const userValidation = (user) => {
    const schema = Joi.object({
        phoneNumber: Joi.number().integer().required()
    })
    return schema.validate(user);
}

exports.UserModel = UserModel;
exports.UserValidation = userValidation;
