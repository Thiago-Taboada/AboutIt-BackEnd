const {Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../../db');

const Usuario = db.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull: false,
        isEmail: true,   
    },
    senha:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    perfil_img_path:{
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    timestamps: true,
    tableName:'usuario'
});

module.exports = Usuario;