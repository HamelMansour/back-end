const { Router } = require('express');
const express = require('express')
const router = express.Router()
const{HELLO, SEND_DATA}= require('../controlers/movies.controlers');
router.get ('/hello', HELLO)
router.post('/send',SEND_DATA)
module.exports = router;