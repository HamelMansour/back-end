const { Router } = require('express');
const express = require('express')
const router = express.Router()
const{HELLO, SEND_DATA, ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE, ALL_MOVIES}= require('../controlers/movies.controlers');
router.get ('/hello', HELLO)
router.post('/send',SEND_DATA)
router.post('/add', ADD_MOVIE)
router.get('/all', ALL_MOVIES)
router.put('/edit',EDIT_MOVIE)
router.post('/delete', DELETE_MOVIE)
module.exports = router;