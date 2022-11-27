const router = require('express').Router();
const jwt = require('jsonwebtoken');
const Post = require('../models/post');
const Comment = require('../models/comment');

// 글쓰기
router.post('/', (req, res) => {
  const { title, content } = req.body.post;
  const token = req.headers.authorization;
  const decode = jwt.verify(token, 'secure');
  const { _id } = decode.user;

  Post.create({ writer: _id, title, content })
    .then((post) => res.send(post))
    .catch((err) => res.status(500).send(err));
});

// 이미지 업로드 & 보여주기
router.post('/image_upload', (req, res) => {
  res.send(req.file);
});

// 게시판 리스트
router.get('/', (req, res) => {
  Post.findAll()
    .then((posts) => {
      if (!posts.length) return res.status(404).send({ err: 'Posts not found' });
      res.send(posts);
    })
    .catch((err) => res.status(500).send(err));
});

// 게시판 디테일
router.get('/:id', (req, res) => {
  const { id } = req.params;
  Post.findById(id)
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err));
});

// 게시판 수정
router.put('/:id', async (req, res) => {
  const { id } = req.params; // 수정할 게시물 번호
  const { title, content } = req.body; // 수정할 내용
  const writer = await Post.findById(id).then((res) => res.writer);

  // 토큰 받아서 글쓴이랑 확인하기
  const token = req.headers.authorization;
  const decode = jwt.verify(token, 'secure');

  if (writer.username === decode.user.username) {
    Post.updateById(id, title, content)
      .then((data) => res.send('게시글이 수정되었습니다.'))
      .catch((err) => res.status(500).send(err));
  } else {
    res.status(400).send('잘못된 접근 입니다.');
  }
});

// 게시판 삭제
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const writer = await Post.findById(id).then((res) => res.writer);

  // 토큰 받아서 글쓴이랑 확인하기
  const token = req.headers.authorization;
  const decode = jwt.verify(token, 'secure');

  if (writer.username === decode.user.username) {
    Post.deleteById(id)
      .then((data) => res.send('게시글이 삭제되었습니다.'))
      .catch((err) => res.status(500).send(err));
  } else {
    res.status(400).send('잘못된 접근 입니다.');
  }
});

// 댓글 쓰기
router.post('/:id/comment', async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  const token = req.headers.authorization;
  const { user } = jwt.verify(token, 'secure');
  const postId = await Post.findById(id).then((res) => res._id);

  Comment.create({ user: user._id, post: postId, content: comment })
    .then((res) => {
      Post.updateCommentById(postId, res._id)
        .then(() => console.log('성공'))
        .catch(() => console.log('실패'));
    })
    .then(() => res.send('댓글 성공'))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
