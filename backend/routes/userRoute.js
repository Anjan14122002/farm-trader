const express = require('express');
const {registerUser, loginUser, logout, uploadUserAvatar, retriveAvatar, userEquipments} = require('../controllers/userController');
const {isAuthenticatedUser} = require('../middleware/auth');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/authenticate', isAuthenticatedUser, (req, res) =>{
    // res.status(200).send("Go ahead Nigga, youre legit");
    res.status(200).send({userId: req.user._id});
})


router.post('/userAvatar', isAuthenticatedUser, upload.single('avatar'), uploadUserAvatar)
router.get('/userAvatar/:userId', retriveAvatar);



router.post('/logout', isAuthenticatedUser, logout);

module.exports = router;