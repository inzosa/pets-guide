const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

// user 생성
userSchema.statics.create = function (payload) {
  const user = new this(payload);
  return user.save();
};

// username으로 user 찾기
userSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};

module.exports = mongoose.model('User', userSchema);
