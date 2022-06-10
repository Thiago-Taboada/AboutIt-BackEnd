const express = require('express');

const Comunidade = require('../models/aboutIt/comunidade');
const Post = require('../models/aboutIt/post');
const Usuario = require('../models/aboutIt/usuario');

const router = express.Router();
router.use(express.json());

module.exports = router;