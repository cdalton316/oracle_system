const Metu = require('../models/metuModel');
const catchAsync = require('../utils/catchAsync');
exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get metu data from collection
  const metutu = await Metu.find();

  // Build template

  // Render that template using metu data from 1

  res.status(200).render('overview', {
    title: 'All Metutu',
    metutu,
  });
});

exports.getMetu = catchAsync(async (req, res) => {
  const metu = await Metu.findOne({
    slug: req.params.slug,
  });
  // .populate({
  //   path: 'reviews',
  //   fields: 'review rating user',
  // });
  res.status(200).render('metu', {
    title: `${metu.name} Metu`,
    metu,
  });
});
