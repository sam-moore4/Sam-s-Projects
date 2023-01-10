const express = require('express')
const postController = require('../controllers/postController.js')
const router = express.Router();

router.get('/', (req,res) => {
    postController.loadPosts(req,res);
})


module.exports = router