const express = require('express');
const { recruitmentController } = require('../controllers');

const router = express.Router();

router.route('/')
    .get(recruitmentController.getRecruitments)
    .post(recruitmentController.createRecruitment);

router.route('/locations')
    .get(recruitmentController.getLocations);

router.route('/:id')
    .get(recruitmentController.getRecruitmentById)
    .put(recruitmentController.updateRecruitment)
    .delete(recruitmentController.deleteRecruitment);

module.exports = router;