const router = require('express').Router();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// SignUp
router.post('/signup', async (req, res) => {
  // 중복된 username인지 찾기
  const { username, password } = req.body;
  const existedUser = await User.findByUsername(username);
  const hash = await argon2.hash(password);
  if (existedUser) {
    res.status(403).send('중복된 회원이 있습니다.');
    return;
  }
  User.create({ username, password: hash })
    .then((user) => res.send(user))
    .catch((err) => res.status(500).send(err));
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findByUsername(username);

  if (!user) {
    res.status(403).send('아이디가 존재하지 않습니다.');
  } else if (!(await argon2.verify(user.password, password))) {
    res.status(403).send('비밀번호가 일치하지 않습니다.');
  } else {
    const access_token = jwt.sign({ user }, 'secure');
    res.send({ user, access_token });
  }
});

// 게시판 글쓰기 이동 할 때 로그인 확인
router.post('/access', (req, res) => {
  const token = req.body.headers.Authorization;
  if (!token) {
    res.status(401).send('로그인이 되어있지 않습니다.');
  } else {
    res.send('success');
  }
});

// 로그인한 User 정보 가져오기
router.get('/loadUser', (req, res) => {
  const token = req.headers.authorization;
  const user = jwt.verify(token, 'secure');
  res.send(user);
});

module.exports = router;
