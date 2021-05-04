const User = require('../models/user')
const textCaseHandler = require("../utils/textCaseHandler")

class userService{
    registerUser = async (options) => {
        try{
            let {name, email, password, username} = options
            if (!name || !email || !password || !username)
            {
                return {"data": {"success": false, "message": 'Request failed due to all required inputs were not included', "required inputs": "name, email, password, username"}, "statusCode": 417}
            }

            email = email.toLowerCase()
            username = username.toLowerCase()
            name = textCaseHandler.firstLetterInSetenceToCapital(name);

            let currentUser = await User.findOne({email})
            if(currentUser){
                return {"data": {"success": false, "message": "Email is already registered with us."}, "statusCode": 409}
            }
            
            let newUser = new User({ name, email, password, username })

            let saveUserToDb = await newUser.save()
            if(saveUserToDb){
                return {"data":{ "success": true, "message": `You have successfully signed up`, "data": saveUserToDb }, "statusCode": 201 }
            }
            
            return {"data": {"success": false, "message": "We encountered an issue registering your account, try again."}, "statusCode": 500}
        }
        catch(err){
            return {"data": {"success": false, "message": err}, "statusCode": 500}
        }
    }


    getUsers = async () => {
        try{
            let allUsers = await User.find({}, '-__v')

            return {"data":{ "success": true, "message": `Request successful`, "data": allUsers }, "statusCode": 200 }
        }
        catch(err){
            return {"data": {"success": false, "message": err}, "statusCode": 500}
        }
    }
}

module.exports = userService