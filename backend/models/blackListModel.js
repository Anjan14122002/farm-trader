const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const blacklistSchema = new mongoose.Schema({
    token: {
      type: String,
      required: true
    },
    expireAt: {
      type: Date,
      default: Date.now,
      // expires: 0 // Set the TTL for each blacklist entry
    }
  });
  

  blacklistSchema.pre('save', async function(next) {
    const { exp } = jwt.decode(this.token);
    // debugger;
    const expiryDate = new Date(exp*1000);
    this.expireAt = expiryDate;
    // console.log("It will expire at: ", this.expireAt);
    next();
  });



  module.exports = mongoose.model("BlackList", blacklistSchema);