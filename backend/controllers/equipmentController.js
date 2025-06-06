const catchAsyncError = require('../middleware/catchAsyncError.js');
const ErrorHandler = require('../utils/errorHandler.js');
const Equipment = require('../models/equipmentModel.js');
const Image = require('../models/imageModel.js');
const { formatEquipment } = require('../utils/formatDocument.js');
// const { dailyRentalFilter, hourlyRentalFilter, equipmentTypeFilter } = require('../services/filterServices.js');
// const { populateAndUnwindEquipmentLocation } = require('../services/equipmentAddressPopulateService');
// const { searchTerm } = require('../services/searchService.js');
// const { sortService } = require('../services/sortService.js');
const { searchEquipment } = require('../services/searchEquipmentService.js');

exports.createEquipment = catchAsyncError(async(req, res, next) => {
    // console.log(req);
    const { ownerId } = req.body;
    if(!ownerId) {
        const error = new ErrorHandler('Owner ID is required', 400)
        return next(error);
    }
    // console.log("posted date: ", req.body);
    const newEquipment = new Equipment(req.body);
    const createdEquipment = await newEquipment.save();
    await createdEquipment.populate('equipmentLocation');
    const equipment = createdEquipment.toObject();
    delete equipment.equipmentImages;
    delete equipment.equipmentLocation._id;
    delete equipment.equipmentLocation.__v;
    equipment['equipmentId'] = equipment['_id'];
    delete equipment._id;
    delete equipment.__v;

    res.status(201).send(equipment);
});


exports.searchEquipment = catchAsyncError(async(req, res, next) => {
    const { searchTerm, filters, sortBy, sortOrder, pageNumber, pageSize } = req.query;
    const decodedString = decodeURIComponent(filters);
    const parsedObject = JSON.parse(decodedString);
    // console.log(parsedObject);
    // console.log(req.query);
    const result = await searchEquipment({
        searchTerm,
        filters: parsedObject,
        sortBy,
        sortOrder,
        pageNumber: parseInt(pageNumber), // Convert to integer
        pageSize: parseInt(pageSize) // Convert to integer
    });

    res.json(result);
})  


exports.getEquipment = catchAsyncError(async(req, res, next) => {
    const { id } = req.params;
    const equipmentDocument = await Equipment.findById(id);

    const equipment = await formatEquipment(equipmentDocument);
    res.status(200).send(equipment);
});



exports.uploadEquipmentImage = catchAsyncError(async(req, res, next) => {
    const { equipment } = req;


    if(!equipment.ownerId.equals(req.user._id)) {
        const error = new ErrorHandler('You do not own the equipment', 401);
        return next(error);
    }
    // console.log(req.file);
    const imageDocument = new Image({
        image: {
            data: req.file.buffer,
            contentType: req.file.mimetype
        }
    });
    await imageDocument.save();

    equipment.equipmentImages.push(imageDocument._id);
    await equipment.save();

    res.sendStatus(201);
});


exports.getEquipmentImage = catchAsyncError(async(req, res, next) => {
    const { equipment } = req;
    const { imageId } = req.body;
    

    if(!equipment.equipmentImages.includes(imageId)) {
        const error = new ErrorHandler('Invalid Image ID')
        return next(error);
    }

    const imageDocument = await Image.findById(imageId);
    // console.log(imageDocument.image.contentType);
    res.set('Content-Type', imageDocument.image.contentType);

    res.send(imageDocument.image.data);
});

exports.getUserEquipments = catchAsyncError(async (req, res, next) => {
    const { _id : userId } = req.user;
    // console.log(userId);
    const userEquipmentList = await Equipment.find({ownerId : userId}).exec();
    // console.log(userEquipmentList);
    res.status(200).send(userEquipmentList);
});