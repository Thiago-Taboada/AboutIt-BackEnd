const {Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../../db');

const Usuario = require('./usuario')

const Conversa = db.define('Conversa', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    timestamps: true,
    tableName:'conversa'
});



Usuario.hasMany(Conversa, { as:'conversasOrigem', foreignKey:'remetente_id'});
Conversa.belongsTo(Usuario, {as: 'remetente', foreignKey:'remetente_id'});

Usuario.hasMany(Conversa, { as:'conversasDestimo', foreignKey:'destinatario_id'});
Conversa.belongsTo(Usuario, {as: 'destinatario', foreignKey:'destinatario_id'});

module.exports = Conversa;