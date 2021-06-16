const Messages = require('../models/Messages.js');
const Message = require('../models/Messages');

exports.newMessage = async ( req, res, next ) => {
  const message = new Messages( req.body );
  try {
     await message.save();
    res.json({
      mensaje: 'Se agrego correctamente'
    })
  } catch (error) {
    res.send(error);
    next();
  }
}

exports.getMessages = async ( req, res, next ) => {
  try {
    const messages = await Messages.find({});
    res.json(messages);
  } catch (error) {
    res.send(error);
  }
}