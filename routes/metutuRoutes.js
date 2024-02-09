const express = require('express');

const metuController = require('./../controllers/metuController');

const router = express.Router();
// router.param('id', metuController.checkID);

router.route('/metu-stats').get(metuController.getMetuStats);
router
  .route('/')
  .get(metuController.getAllMetutu)
  .post(metuController.createMetu);

router
  .route('/:id')
  .get(metuController.getMetu)
  .patch(metuController.updateMetu)
  .delete(metuController.deleteMetu);

module.exports = router;
