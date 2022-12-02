const mongoose = require('mongoose');

const oauthShema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
});

oauthShema.statics.create = function (payload) {
  const oauth = new this(payload);
  return oauth.save();
};

oauthShema.statics.findByEmail = function (username) {
  return this.findOne({ username });
};

module.exports = mongoose.model('Oauth', oauthShema);
