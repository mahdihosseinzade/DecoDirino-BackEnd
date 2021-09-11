const kavenegar = require('kavenegar');
const lodash = require('lodash');
const jwt = require('jsonwebtoken');
const { UserModel, UserValidation } = require('../models/UserModel');
const {ProjectModel} = require ('../models/ProjectModel');
const {MessageModel} = require('../models/MessageModel');

const kevenegarAPI = kavenegar.KavenegarApi({
    apikey:'57747A346F7A36515034315830696B79733856653650384F5254474678436433'
});


const UserController = {

    login: async (req, res) => {
        let reqUser = lodash.pick(req.body, ['phoneNumber'])
        const validation = UserValidation(reqUser)
        if (validation.error) return res.status(400).send(validation.error.details[0].message)

        let givenUser = await UserModel.findOne({ phoneNumber:  reqUser.phoneNumber})

        if (!givenUser){
            givenUser = new UserModel(reqUser)
            try {
                await givenUser.save();
                kevenegarAPI.Send({
                    message:'کد تایید شما دیرینو 674523',
                    receptor:reqUser.phoneNumber
                },
                    function (resp,status){
                    res.send(resp,status);
                    });
                // res.send()
            } catch (error) {
                console.error(error.message)
                res.send(error.message)
            }
        }
        else {
            try {
                kevenegarAPI.Send({
                        message:'کد تایید شما دیرینو 674523',
                        receptor:reqUser.phoneNumber
                    },
                    function (resp,status){
                        res.send(resp,status);
                    });
                // res.send()
            } catch (error) {
                console.error(error.message)
                res.send(error.message)
            }
        }
    },


    verify: async (req,res) => {

        let reqUser = lodash.pick(req.body, ['phoneNumber']);
        const validation = UserValidation(reqUser);
        if (validation.error) return res.status(400).send(validation.error.details[0].message);

        let vCode =lodash.pick(req.body,['verifyCode']);

        if(!(vCode.verifyCode === 674523)){
            return res.status(400).send('Invalid VerifyCode!')
        }

        let givenUser = await UserModel.findOne({phoneNumber:reqUser.phoneNumber});
        const token = givenUser.generateAuthToken();
        try {
            res.send({
                token:token,
                info:lodash.pick(givenUser,["_id","phoneNumber"])
            });
        }
        catch (error){
            console.error(error.message)
            res.send(error.message)
        }
    },

    getUserInfo: async (req, res) => {

        const token = req.header('x-auth-token')
        const decodedUser = jwt.decode(token)
        let user = await UserModel.findById(decodedUser.id)
        let Projects=null;
        let Messages=null;
        if(user.access==="admin")
        {
            try {
                Projects = await ProjectModel.find();
                Messages = await MessageModel.find();
            }
            catch (error){
                console.error(error.message)
                res.send(error.message)
            }
        }

        const resP ={
            user:user,
            Projects:Projects,
            Messages:Messages
        }

        res.send(resP)
    },

    setInfo: async (req, res) => {
        const token = req.header('x-auth-token')
        const decodedUser = jwt.decode(token)
        let info = req.body
        let avatarFile = req.file

        console.log(info.acceptRules)
        if (avatarFile) {
            await UserModel.findByIdAndUpdate(decodedUser.id , {
                name: info.name,
                lastName: info.lastName,
                email:info.email,
                userName:info.userName,
                gender:info.gender,
                acceptRules:info.acceptRules,
                avatar: {
                    name: avatarFile.filename,
                    path: `/static/images/avatars/${avatarFile.filename}`
                }
            })
        } else {
            await UserModel.findByIdAndUpdate(decodedUser.id , {
                name: info.name,
                lastName: info.lastName,
                email:info.email,
                userName:info.userName,
                gender:info.gender,
                acceptRules:info.acceptRules,
            })
        }

        const newUser = await UserModel.findById(decodedUser.id)

        res.send(newUser)
    }
}


module.exports = UserController
