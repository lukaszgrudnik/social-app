const express = require('express');
const app = require('../main/app');
const posts = require('../data/posts.json');

const router = express.Router();

router.get('/posts', (req, res, next) => {
  res.json(posts);
});


router.post('/post/comment', (req, res, next) => {
  const comment = req.body;
  const post= posts.find(post=> post.id === comment.postId);
  post.comments.push(comment);
  console.log(post);
  res.json(posts);
})


module.exports = router;
