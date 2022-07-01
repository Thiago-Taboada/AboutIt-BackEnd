const express = require('express');

const Comunidade = require('../../models/aboutit/comunidade');
const Usuario = require('../../models/aboutit/usuario');
const Post = require('../../models/aboutit/post');

const router = express.Router();
router.use(express.json());

const comunidadeRouter = require('./comunidadeRouter');
const usuarioRouter = require('./usuarioRouter');
const postRouter = require('./postRouter');

router.use('/comunidade', comunidadeRouter);
router.use('/usuario', usuarioRouter);
router.use('/post', postRouter);

module.exports = router;