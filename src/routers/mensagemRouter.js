const express=require('express');

const router=express.Router();

router.use(express.json());

const Mensagem = require('../models/aboutIt/mensagem');


router.get('/',async(req,res)=> {
    let mensagem=await mensagem.findAll();
	res.send(`mensagem`);

});

router.get('/:id',async(req,res)=> {
    let mensagem=await mensagem(req.params.id);
	res.send(`GET ID: ${req.params.id}`);
});

router.put('/:id',async(req,res)=> { //atualizar
    let mensagem=await mensagem.findByPk(req.params.id);
	mensagem=await post.save(mensagem);
	res.send(mensagem);
	
});

router.post('/:',async(req,res)=> { //salvar
    let mensagem=await mensagem.build(req.body);//create/build 
	mensagem=await mensagem.save();
	res.send(mensagem);
	
});

router.delete('/:id',async(req,res)=> { //delete
    let mensagem=await mensagem.findByPk(req.params.id);
	mensagem.destroy();
	res.status(204).send();
	
});

module.exports=router;