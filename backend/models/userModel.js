const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const crypto = require('crypto');
// const BlackList = require('./blackListModel');
const Address = require('./addressModel');
const Image = require('./imageModel');
const { type } = require('os');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],
    },
    email: {
        type: String,
        required: [true, "Please Enter Your email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false
    },
    avatar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image'
    },
    role: {
        type: String,
        default: "user",
    },
    contact_number: {
        type: String,
        required: [true, "Please enter your Contact Number"],
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        required: true
    },
    // blacklistedTokens: [{type:mongoose.Schema.Types.ObjectId, ref: 'BlackList'}],

    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
});

//JWT TOKEN
userSchema.methods.getJWTToken = function () {
    // console.log('user id: ', this._id);
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE,
    });
    
}

// Compare Password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

// Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function () {
    
    // Generating Token
    const resetToken = crypto.randomBytes(20).toString("hex"); 

    // Hashing and adding resentPasswordToken to useSchema
    this.resentPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");
    
    this.resentPasswordExpire = Date.now() + 15 * 60 * 1000;
    return resetToken; 
}
module.exports = mongoose.model("User", userSchema);