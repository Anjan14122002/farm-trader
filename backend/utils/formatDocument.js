const Equipment = require('../models/equipmentModel.js');
const Image = require('../models/imageModel.js');
const User = require('../models/userModel.js');
const BlackList = require('../models/blackListModel.js');


exports.formatEquipment = async function(equipmentDocument) {
    await equipmentDocument.populate('equipmentLocation');
    const equipment = equipmentDocument.toObject();
    delete equipment._id;
    delete equipment.__v;

    delete equipment['equipmentLocation']._id;
    delete equipment['equipmentLocation'].__v;

    return equipment;
}