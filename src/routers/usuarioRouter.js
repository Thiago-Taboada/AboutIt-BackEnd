const express = require('express');

const router = express.Router();

const Usuario = require('../../models/aboutit/usuario');

router.get('/', async (req, res) => {
    const usuarios = await Usuario.findAll({include: 'usuario'});
    res.send(usuarios);
});

router.get('/:id', async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id, {include: 'usuario'});
    res.send(usuario);
});

router.post('/', async (req, res) => {//salvar
    let usuario = await Usuario.build(req.body); //create/build
    usuario = await usuario.save()
    res.send(usuario);
});

router.put('/:id', async (req, res) => {//atualizar
    let usuario = await Usuario.findByPk(req.params.id);
    usuario = await usuario.save(usuario);
    res.send(usuario);
});

router.delete('/:id', async (req, res) => {//delete
    let usuario = await Usuario.findByPk(req.params.id);
    usuario.destroy();
    res.status(204).send();
});

module.exports = router;