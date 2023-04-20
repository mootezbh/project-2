const authController = require('../controllers/authController');
const auth = require('../middleware/verif');

const route = require('express').Router();

route.get("/login", authController.login);
route.get("logout", authController.logout);
route.get("/forgot", authController.forget);
route.get("/reset/:token", authController.resetPassword);
route.get("/",auth, authController.fetchUser);

module.exports = route;