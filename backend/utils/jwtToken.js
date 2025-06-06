// Creating token and saving cookie 
const sendToken = async (user, statusCode, res) => {
    const token = user.getJWTToken();

    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: false,
        sameSite: 'lax',
        // domain: 'localhost:3000'
    };
    // debugger;
    // console.log(user);
    // const {password, ...userWithoutPassword} = user;
    // console.log(userWithoutPassword);
    await user.populate('address');
    const userInfo = user.toObject();
    if(userInfo.password){
        delete userInfo.password;
    }
    delete userInfo['address']._id;
    delete userInfo['address'].__v;
    // userObj[userId] = userObj._id;
    userInfo['userId'] = userInfo['_id'];
    delete userInfo._id;
    delete userInfo.avatar;
    delete userInfo.__v;
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Credentials', true);
    // res.header(
    //     'Access-Control-Allow-Headers',
    //     'Origin, X-Requested-With, Content-Type, Accept'
    // );
    // res.status(statusCode).cookie('token', token, options).json({
    //     success: true,
    //     userInfo,
    // });
    // res.cookie('token', token, options);
    // res.send();
    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        userInfo,
    });
}

module.exports = sendToken;