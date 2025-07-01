const express = require('express');
const { videoController } = require('../controllers');

const router = express.Router();

router.route('/')
    .get(videoController.getVideos)
    .post(videoController.createVideo);

router.route('/:id')
    .get(videoController.getVideoById)
    .put(videoController.updateVideo)
    .delete(videoController.deleteVideo);

module.exports = router;