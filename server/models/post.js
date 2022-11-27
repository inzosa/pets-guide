const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);

const postSchema = new mongoose.Schema(
  {
    title: { type: String, reqruied: true },
    content: { type: String, requried: true },
    writer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    like_count: { type: Number, default: 0 },
    like: { type: mongoose.Schema.Types.ObjectId, ref: 'Like' },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  },
  {
    timestamps: true,
  }
);

postSchema.statics.create = function (payload) {
  const post = new this(payload);
  return post.save();
};

postSchema.statics.findAll = function () {
  return this.find({}).populate('writer').sort({ _id: -1 });
};

postSchema.statics.findById = function (id) {
  return this.findOne({ seq: id }).populate('writer').populate({
    path: 'comments',
    populate: 'user',
  });
};

postSchema.statics.findCommentListById = function (id) {};

// 게시글 제목, 내용 업데이트
postSchema.statics.updateById = function (id, title, content) {
  return this.updateOne(
    {
      seq: id,
    },
    {
      $set: {
        title: title,
        content: content,
      },
    }
  );
};

// 게시글 댓글 추가
postSchema.statics.updateCommentById = function (postId, commentId) {
  return this.updateOne(
    {
      _id: postId,
    },
    {
      $push: { comments: commentId },
    }
  );
};

// 게시글 좋아요 증가
postSchema.statics.updateLikeById = function (postId) {
  return this.updateOne(
    {
      _id: postId,
    },
    {
      $inc: { like_count: 1 },
    }
  );
};

// 게시글 좋아요 감소
postSchema.statics.updateunLikeById = function (postId) {
  return this.updateOne(
    {
      _id: postId,
    },
    {
      $inc: { like_count: -1 },
    }
  );
};

postSchema.statics.deleteById = function (id) {
  return this.deleteOne({ seq: id });
};

// 게시판 번호 자동 증가
postSchema.plugin(autoIncrement, { inc_field: 'seq' });

module.exports = mongoose.model('Post', postSchema);
