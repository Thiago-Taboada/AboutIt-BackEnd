const {Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../../db');

const Usuario = require('./usuario');
const Comunidade = require('./comunidade');

const Post = db.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        titulo: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        texto:{
            type: DataTypes.TEXT
        },
        post_img:{
            type: DataTypes.UUID,
            allowNull: true
        }
    }, {
        timestamps: true,
        tableName:'post'
    }
);

Usuario.hasMany(Post,{as: 'posts', foreignKey:'usuario_id'});
Post.belongsTo(Usuario, {as: 'usuario', foreignKey:'usuario_id'});

Comunidade.hasMany(Post,{as: 'posts', foreignKey:'comunidade_id'});
Post.belongsTo(Comunidade, {as: 'comunidade', foreignKey:'comunidade_id'});

module.exports = Post;