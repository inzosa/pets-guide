const router = require('express').Router();
const Like = require('../models/like');
const Post = require('../models/post');
const jwt = require('jsonwebtoken');

router.post('/:id', async (req, res) => {
  const token = req.headers.authorization;
  const { id } = req.params;
  const post = await Post.findById(id);

  const decode = jwt.verify(token, 'secure');
  const existLike = await Like.findByUserId(decode.user._id, post._id);

  if (existLike) {
    Like.deleteByUserId(decode.user._id, post._id)
      .then(() => {
        Post.updateunLikeById(post._id).then((res) => console.log(res));
        res.send(false);
      })
      .catch((err) => res.status(500).send(err));
  } else {
    Like.create({ user: decode.user._id, post: post._id })
      .then(() => {
        Post.updateLikeById(post._id).then((res) => console.log(res));
        res.send(true);
      })
      .catch((err) => res.status(500).send(err));
  }
});

// 사용자 좋아요 확인
router.post('/:id/active', async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  const decode = jwt.verify(token, 'secure');
  const postId = await Post.findById(id);

  const existLike = await Like.findByUserId(decode.user._id, postId);
  existLike ? res.send(true) : res.send(false);
});

module.exports = router;
