const express = require('express');
const router = express.Router();
const passport = require('../lib/passport'); // ✅ caminho correto

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/sensores');
  }
);

module.exports = router;
