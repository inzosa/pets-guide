const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  },
  {
    timestamps: true,
  }
);

likeSchema.statics.create = function (payload) {
  const like = new this(payload);
  return like.save();
};

likeSchema.statics.findByUserId = function (userId, postId) {
  return this.findOne({ user: userId, post: postId });
};

likeSchema.statics.deleteByUserId = function (userId, postId) {
  return this.deleteOne({ user: userId, post: postId });
};

likeSchema.statics.findById = function (id) {
  return this.findOne({ post: id }).populate('post').populate('user');
};

module.exports = mongoose.model('Like', likeSchema);
