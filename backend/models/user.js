const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const UserSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true },
    username: { type: String, default: "" },
    password: { type: String, default: "" }
}, { timestamps: true});

UserSchema.pre("save", function (next) {
    const user = this;
    
    if (!user.isModified('password')) return next();

    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
})

const User = module.exports = mongoose.model('User', UserSchema);