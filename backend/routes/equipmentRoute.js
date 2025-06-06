const express = require('express');
const { createEquipment, uploadEquipmentImage, getEquipmentImage, getEquipment, searchEquipment, getUserEquipments } = require('../controllers/equipmentController');
const {isAuthenticatedUser} = require('../middleware/auth');
const { validateEquipmentId } = require('../middleware/documentCheck');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();


router.post('/equipment', isAuthenticatedUser, createEquipment);
router.get('/equipment', searchEquipment);
router.get('/user/equipment', isAuthenticatedUser, getUserEquipments);


// router.post('/equipment/image', isAuthenticatedUser, upload.array('equipmentImages'), uploadEquipmentImage); Depricated
router.post('/equipment/image', isAuthenticatedUser, upload.single('equipmentImage'), validateEquipmentId, uploadEquipmentImage);
router.get('/equipment/image', validateEquipmentId, getEquipmentImage);

router.get('/equipment/:id', getEquipment);

module.exports = router;


//ChangesgetEquipment
//Make a validation function for validating weather the equipment is present in the collection or not

//Add a search and filter function
