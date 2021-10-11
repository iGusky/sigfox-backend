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
    const messages = await Messages.find({})
    .sort({time: -1})
    .limit(10);
    res.json({messages});
  } catch (error) {
    res.send(error);
  }
}

exports.getAllMessages = async (req, res, next) => {
  const { page=1, limit=50 } = req.query;
  try {
    const messages = await Messages.find({})
    .sort({time: -1})
    .limit(limit * 1)
    .skip((page-1) * limit)
    .exec();

    const count = await Messages.countDocuments();

    res.json({
      messages  ,
      totalPages: Math.ceil(count/limit),
      currentPage: page
    });

  } catch (error) {
    console.error(error)
  }
}