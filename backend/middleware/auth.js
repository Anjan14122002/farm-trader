const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const BlackList = require('../models/blackListModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('./catchAsyncError');
const { blacklist } = require("validator");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
    // console.log(req);
    const { token } = req.cookies;
    // console.log(req.cookies)
    if (!token) {
        return next(new ErrorHandler("No token recieved", 401));
    }

    const document = await BlackList.findOne({token: token});
    if(document) {
        res.clearCookie('token');
        return next(new ErrorHandler("Invalid token", 401));
    }
    
    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // console.log("Auth: ", decodedData);
    const user = await User.findById(decodedData.id).exec();
    req.user = user;
    if (!user) {
        console.log("User not found");
        return next(new ErrorHandler("Invalid Email or Password", 401))
    }
    next();
});