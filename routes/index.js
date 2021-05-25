const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

module.exports = function() {
  router.post('/mensajes', messageController.newMessage );
  router.get('/mensajes', messageController.getMessages);
}