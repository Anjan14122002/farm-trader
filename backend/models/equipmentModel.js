const mongoose = require('mongoose');
const User = require('../models/userModel');
const Address = require('../models/addressModel');
const Image = require('./imageModel')

const allowedEquipmentType = new Set([
'Sprayer',
'Cultivator',
'Harrow',
'Combine Harvester',
'Tractor',
'Plough',
'Planters',
'Fertilizer Spreaders',
'Seeders',
'Irrigation Equipment',
'Mowers',
'Plows',
'Rotavator',
'Agricultural Trolley',
'Backhoe',
'Baler',
'Transplanters',
'Planting Machines',
'Cutter',
'Harvesting Equipment'
]);

function validateEquipmentType(value) {
    return allowedEquipmentType.has(value);
}

function validateDate(date) {
    // console.log(date);
    const dateFormat = /^\d{2}-\d{2}-\d{4}$/;
    return dateFormat.test(date);
}

async function validateOwnerId(ownerId) {
    // Check if ownerId is a valid ObjectId format
    if (!mongoose.Types.ObjectId.isValid(ownerId)) {
        const error = new Error('Invalid ObjectId format');
        error.statusCode = 400; // Set the status code to 400 Bad Request
        throw error;
    }

    // Check if user with provided ownerId exists in the User collection
    const userExists = await User.exists({ _id: ownerId });
    if (!userExists) {
        const error = new Error('User not found');
        error.statusCode = 404; // Set the status code to 404 Not Found
        throw error;
    }

    return true;
}

function formatDate(date) {
    debugger;
    // console.log("From here: ");
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const value = `${day}-${month}-${year}`;
    // console.log(value);
    return value;
}

const equipmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Enter Equipment Title"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [3, "Name should have more than 2 characters"],
    },
    description: {
        type: String
    },
    ownerId: {
        type : mongoose.Schema.Types.ObjectId,
        required: [true, "Please Enter Owner Id"],
        validate: {
            validator: validateOwnerId,
            message: 'Invalid or non-existent Owner ID'
        }
    },
    equipmentType: {
        type: String,
        required: true,
        validate: [validateEquipmentType, 'Invalid value for Equipment Type']
    },
    equipmentLocation: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        required: true
    },
    dailyRental: {
        type: Number,
        required: true,
        min: 0 // Ensure non-negative value
    },
    hourlyRental: {
        type: Number,
        required: true,
        min: 0 // Ensure non-negative value
    },
    equipmentImages: [{
        type: mongoose.Schema.Types.ObjectId,
    }],
    postedAt: {
        type: Date,
        default: Date.now
    },
    manufacturer: {
        type: String,
    },
    additionalDetails: {
        type: Object,
    },
    // equipmentRating: {
    //     type: Number
    // } //Add rating system
});

module.exports = mongoose.model("Equipment", equipmentSchema);