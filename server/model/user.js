const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// const { Schema } = mongoose;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter your name'
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: 'Please enter your email',
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 64
  },
  stripe_account_id: {},
  stripe_seller: {},
  stripeSession: {}
}, {
  timestamps: true
});

userSchema.pre("save", function(next) {
  let user = this;
  if (user.isModified("password")) {
    return bcrypt.hash(user.password, 12, function(err, hash) {
      if (err) {
        console.log("hash has error:", err);
        return next(err);
      }
      user.password = hash;
      return next();
    });
  } else {
    return next();
  }
});

userSchema.methods.comparePassword = function (password, next) {
  bcrypt.compare(password, this.password, function(err, match){
    if(err){
      console.log("Compare Password Error", err)
      return next(err, false)
    }
    console.log("Match Password", match);
    return next(null, match);
  })
}

const User = mongoose.model("User", userSchema);

module.exports = User;