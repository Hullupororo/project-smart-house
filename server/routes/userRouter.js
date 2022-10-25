const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const router = express.Router();

router.post('/registration', async (req, res) => {
  const { name, email, password } = req.body;
  if (name && email && password) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: { name, password: await bcrypt.hash(password, 10) },
      });
      if (created) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      console.log('we are here');
      return res.json({ error: 'Incorrect email or password' });
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.json({ error: 'Please fill out fields' });
});

router.post('/authorization', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({
        where: { email },
      });
      if (await bcrypt.compare(password, user.password)) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      return res.json({ error: 'Incorrect email or password' });
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.json({ error: 'Please fill out fields' });
});

router.post('/check', (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.json({});
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});

module.exports = router;
