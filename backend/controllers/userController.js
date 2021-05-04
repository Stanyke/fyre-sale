var userService = require('../services/userService')

module.exports = function userController() {
    const userServiceInstance = new userService();

    //Register user
    this.register = async (req, res) => {
        const data = await userServiceInstance.registerUser(req.body);
        return res.status(data.statusCode).json(data.data);
    }

    //Get all registered users
    this.getUsers = async (req, res) => {
        const data = await userServiceInstance.getUsers();
        return res.status(data.statusCode).json(data.data);
    }
}