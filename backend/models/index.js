const dbConfig = require('../config/db');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user')(sequelize, Sequelize);
db.post = require('./post')(sequelize, Sequelize);
db.comment = require('./comment')(sequelize, Sequelize);

db.comment.belongsTo(db.post);
db.post.hasMany(db.comment);
db.post.belongsTo(db.user);
db.user.hasMany(db.post);

module.exports = db;