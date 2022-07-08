const express = require('express');
const env = require('dotenv/config')

const database = require('./db');
const app = express();
app.use(express.json());

const aboutItRouter = require('./routers/aboutItRouter');
const comunidadeRouter = require('./routers/comunidadeRouter');
const conversaRouter = require('./routers/conversaRouter');
const mensagemRouter = require('./routers/mensagemRouter');
const postRouter = require('./routers/postRouter');
const usuarioRouter = require('./routers/usuarioRouter');

app.use('/aboutIt', aboutItRouter);
app.use('/comunidade', comunidadeRouter);
app.use('/conversa', conversaRouter);
app.use('/mensagem', mensagemRouter);
app.use('/post', postRouter);
app.use('/usuario', usuarioRouter);

app.listen(process.env.PORT || 3000, async ()=>{
    const resultDb = await database.sync({force:true});
    console.log('server started');
})
