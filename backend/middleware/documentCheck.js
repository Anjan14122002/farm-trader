const catchAsyncError = require('./catchAsyncError.js');
const ErrorHandler = require('../utils/errorHandler.js');

const Equipment = require('../models/equipmentModel.js');
const Image = require('../models/imageModel.js');
const User = require('../models/userModel.js');
const BlackList = require('../models/blackListModel.js');

exports.validateEquipmentId = catchAsyncError(async(req, res, next) => {
    // debugger;
    const { equipmentId } = req.body;
    // console.log(equipmentId);
    const equipment = await Equipment.findById(equipmentId).exec();
    if(!equipment)
    {
        const error = new ErrorHandler('Equipment not found', 404)
        return next(error);
    }

    req.equipment = equipment;
    next();
});