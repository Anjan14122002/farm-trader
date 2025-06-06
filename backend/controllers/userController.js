// const multer = require('multer')
const User = require('../models/userModel');
const BlackList = require('../models/blackListModel');
const Image = require('../models/imageModel');
const Address = require('../models/addressModel');
const Equipment = require('../models/equipmentModel');
const sendToken = require('../utils/jwtToken');
const ErrorHandler = require('../utils/errorHandler.js');
const catchAsyncError = require('../middleware/catchAsyncError.js');
const imageModel = require('../models/imageModel');


exports.registerUser = catchAsyncError(async(req, res, next) => {
    const {name ,email, password, contact_number, address} = req.body;

    const isPresent = await User.findOne({email}).exec();
    if(isPresent != null)
    {
        const error = new ErrorHandler('User Already Exists', 409)//Need a better status code
        return next(error);
    }

    const userAddressDocument = new Address(address);
    await userAddressDocument.save();

    const user = await User.create({
        name,
        email,
        password,
        contact_number,
        address: userAddressDocument._id
    });
    //Add password validator
    await sendToken(user, 201, res);
});

exports.uploadUserAvatar = catchAsyncError(async(req, res, next) => {
    const { user } = req;

    const newAvtarDocument = new Image({
        image: {
            data: req.file.buffer,
            contentType: req.file.mimetype
        }
    });
    await newAvtarDocument.save();

    user.avatar = newAvtarDocument._id;
    await user.save();
    res.status(201).send("User Image Updated");
});

exports.loginUser = catchAsyncError(async(req, res, next) => {
    const { email, password } = req.body;

    //checking if user has given password and email both 
    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email and Password", 400))
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        console.log("User not found");
        return next(new ErrorHandler("Invalid Email or Password", 401))
    }

    const isPasswordMatched = user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    await sendToken(user, 200, res);
});

exports.logout = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;
  
    const backListEntry = await BlackList.create({
        token
    });
    res.clearCookie('token');
    res.status(200).send("Logout Successful");
});


exports.retriveAvatar = catchAsyncError(async (req, res, next) => {
    // console.log("Request Avatar body is:",req.params);
    const { userId } = req.params;
    const user = await User.findById(userId).exec();
    await user.populate('avatar');
    // console.log()
    // console.log(user);
    if(!user.avatar.image)
    {
        return next(new ErrorHandler('Image not found', 404));
    }
    res.set('Content-Type', user.avatar.image.contentType);
    // console.log(user.avatar.image.contentType);
    // console.log(res);
    res.send(user.avatar.image.data);
});

