require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const upload = multer({
  storage: multer.diskStorage({
    // 저장한공간 정보 : 하드디스크에 저장
    destination(req, file, done) {
      // 저장 위치
      done(null, 'uploads/'); // uploads라는 폴더 안에 저장
    },
    filename(req, file, done) {
      // 파일명을 어떤 이름으로 올릴지
      const ext = path.extname(file.originalname); // 파일의 확장자
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); // 파일이름 + 날짜 + 확장자 이름으로 저장
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5메가로 용량 제한
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: 'http://localhost:3000', credentials: 'true' }));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(upload.single('file'));

// 몽고DB 연결
const mongoose = require('mongoose');
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.log(err);
  });

app.use('/pets', require('./routes/pets'));
app.use('/auth', require('./routes/auth'));
app.use('/posts', require('./routes/posts'));
app.use('/like', require('./routes/like'));

app.listen(5000, () => {
  console.log('Server on!');
});
