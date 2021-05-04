const userController = require('../controllers/userController');
const router = require('express').Router();

module.exports = function () {
    const userCtrl = new userController();

    router.post('/insertUser', (userCtrl.register));
    router.get('/getUsers', (userCtrl.getUsers));


    return router;
}