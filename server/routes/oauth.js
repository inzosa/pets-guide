const router = require('express').Router();
const Oauth = require('../models/oauth');

router.post('/', async (req, res) => {
  const { email } = req.body;

  const existEmail = await Oauth.findByEmail(email);
  if (existEmail) {
    return;
  } else {
    Oauth.create({ username: email })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }
});

module.exports = router;
