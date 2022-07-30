const express = require('express');
const app = express();
const cors = require('cors');

const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function (req, res) {
  admin.auth().verifyIdToken(token).then(console.log);
});
app.listen(4000, () => {
  console.log('server start');
});
