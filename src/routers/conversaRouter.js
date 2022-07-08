const express=require('express');

const router=express.Router();

router.use(express.json());

const Conversa = require('../models/aboutIt/conversa');

router.get('/', async(req,res)=> {
																															//    res.send(`GET ALL`);
let Conversa = await Conversa.findAll();
    res.send(Conversa);
});

router.get('/:id', async(req,res)=> {
    res.send(`GET ID: ${req.params.id}`);

//let id = await id.findAll();

});

router.post('/:', async(req,res)=> { //salvar
    res.send(`POST: ${req.body}`);
});

router.put('/:id', async(req,res)=> { //atualizar
    res.send(`PUT id: ${req.body}`);
});

router.delete('/:id', async(req,res)=> { //delete
    res.send(`DELETE: ${req.params.id}`);
});

module.exports=router;