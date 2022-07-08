const {Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../../db');

const Usuario = require('./usuario');
const Conversa = require('./conversa');

const Mensagem = db.define('Mensagem', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    conteudo: {
        type: DataTypes.TEXT,
    }
}, {
    timestamps: true,
    tableName:'mensagem'
});

Conversa.hasMany(Mensagem, {as: 'mensagens', foreignKey:'conversa_id'});
Mensagem.belongsTo(Conversa, {as: 'conversa', foreignKey: 'conversa_id'});

Usuario.hasMany(Mensagem, { foreignKey:'remetente_id'});
Mensagem.belongsTo(Usuario, {as: 'remetente', foreignKey:'remetente_id'});

Usuario.hasMany(Mensagem, { foreignKey:'destinatario_id'});
Mensagem.belongsTo(Usuario, {as: 'destinatario', foreignKey:'destinatario_id'});

module.exports = Mensagem;