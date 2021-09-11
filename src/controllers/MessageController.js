const { MessageModel } = require('../models/MessageModel');


const MessageController = {

    createMessage:async (req,res)=>{
        let reqMessage =req.body;
        let givMessage = new MessageModel(reqMessage);

        try {
            await givMessage.save();
            res.send(givMessage)
        }
        catch (error){
            console.error(error.message)
            res.send(error.message)
        }
    },

    getMessage:async (req,res)=>{

        const Messages = await MessageModel.find();
        res.send(Messages);
    }
}

module.exports = MessageController;
