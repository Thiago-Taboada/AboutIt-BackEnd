const express = require('express');

const router = express.Router();

const Comunidade = require('../../models/aboutit/comunidade')

router.get('/', async (req, res) => {
    const comunidades = await Comunidade.findAll();
    res.send(comunidades);
});

router.get('/:id', async (req, res) => {
    const comunidade = await Comunidade.findByPk(req.params.id, {include: 'posts'});
    res.send(comunidade);
});

router.post('/', async (req, res) => {//salvar
    let comunidade = await Comunidade.build(req.body); //create/build
    comunidade = await comunidade.save()
    res.send(comunidade);
});

router.put('/:id', async (req, res) => {//atualizar
    let comunidade = await Comunidade.findByPk(req.params.id);
    comunidade = await comunidade.save(comunidade);
    res.send(comunidade);
});

router.delete('/:id', async (req, res) => {//delete
    let comunidade = await Comunidade.findByPk(req.params.id);
    comunidade.destroy();
    res.status(204).send();
});

module.exports = router;