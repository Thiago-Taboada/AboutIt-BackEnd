const { Sequelize, DataTypes } = require('sequelize');
const db = require('./db');

const Atividade = db.define('Atividade',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    disciplina: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    nota:{
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0
    },
    data_envio: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    data_correcao: {
        type: DataTypes.DATE
    },
    observacao:{
        type: DataTypes.TEXT
    }
},{
    tableName:'atividade'
});


module.exports = Atividade;