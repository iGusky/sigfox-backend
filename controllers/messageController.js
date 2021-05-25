const Message = require('../Models/Messages');

exports.newMessage = async ( req, res, next ) => {
  const message = new Message( req.body );
  try {
    res.json({
      mensaje: 'Se agrego correctamente'
    })
  } catch (error) {
    res.send(error)
  }
}

exports.getMessages = async ( req, res, next ) => {
  try {
    const messages = await ClientRectList.find({});
    res.json(messages);
  } catch (error) {
    res.send(error);
  }
}