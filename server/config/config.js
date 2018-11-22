<<<<<<< HEAD
//=====================
//Puerto
//=====================
process.env.PORT = process.env.PORT || 3000;

//=====================
//Entorno
//=====================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=====================
//Vencimiento token
//=====================
//60 segundos
//60 minutos
//24 horas 
//30 dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30

//=====================
//SEED de autenticación
//=====================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//=====================
//Base de Datos
//=====================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafeuser:123456a@ds111244.mlab.com:11244/cafedb';
}

process.env.URLDB = urlDB;
=======
//==========
//Puerto
//==========

process.env.PORT = process.env.PORT || 3000;
>>>>>>> e2ba04df9c91ad770ad6419789d09e57e0ac362f
