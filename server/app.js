const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.listen(4000, () => {
  console.log('server start');
});
