const express = require('express');

const Comunidade = require('../models/aboutIt/comunidade');
const Usuario = require('../models/aboutIt/usuario');
const Post = require('../models/aboutIt/post');

const router = express.Router();
router.use(express.json());

const comunidadeRouter = require('./comunidadeRouter');
const usuarioRouter = require('./usuarioRouter');
const postRouter = require('./postRouter');

router.use('/comunidade', comunidadeRouter);
router.use('/usuario', usuarioRouter);
router.use('/post', postRouter);

module.exports = router;