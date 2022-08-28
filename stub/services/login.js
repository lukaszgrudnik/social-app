const express = require('express');
const app = require('../main/app');

const router = express.Router();


router.post('', (req, res, next) => {
  const {email, password} = req.body;
  if (email === 'john.doe@email.com' && password === '123')
    res.json({
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9obiIsInN1cm5hbWUiOiJEb2UiLCJpYXQiOjE1MTYyMzkwMjJ9.cpjL9tqBG9dRIctLdziczn8rid4QqtC1iMpST2Z0wBE"
    })
  else
    res.status(401).send('Unauthorized');
})

module.exports = router;
