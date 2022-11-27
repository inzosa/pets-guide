const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

commentSchema.statics.create = function (payload) {
  const comment = new this(payload);
  return comment.save();
};

module.exports = mongoose.model('Comment', commentSchema);
