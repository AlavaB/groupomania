module.exports = app => {
  const users = require('../controllers/user');

  var router = require('express').Router();

  //Create a new User
  router.post("/", users.createUser);
  router.post("/login", users.login);


  //Get all Users
  router.get("/", users.getAllUsers);

  //Get one User
  router.get("/:id", users.getOneUser);

  app.use('/api/users', router);
};