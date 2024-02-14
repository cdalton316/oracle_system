const fs = require('fs');
const Metu = require('./../models/metuModel');
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('./../utils/apiFeatures');

exports.getAllMetutu = catchAsync(async (req, res) => {
  // EXECUTE QUERY
  const features = new APIFeatures(Metu.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .pagination();
  const metutu = await features.query;
  res.status(200).json({
    status: 'success',
    results: metutu.length,
    data: {
      metutu,
    },
  });
});

exports.getMetu = catchAsync(async (req, res) => {
  const metu = await Metu.findById(req.params.id);
  res.status(200).json({
    status: 'success',
    data: {
      metu,
    },
  });
});

exports.createMetu = catchAsync(async (req, res, next) => {
  const newMetu = await Metu.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      metutu: newMetu,
    },
  });
});
exports.updateMetu = catchAsync(async (req, res) => {
  const metu = await Metu.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: 'success',
    data: {
      metu,
    },
  });
});
exports.deleteMetu = async (req, res) => {
  try {
    await Metu.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

// exports.getMetuStats = async (req, res) => {
//   try {
//     const stats = await Metu.aggregate([
//       $match:{

//       },
//       $group:{},
//     ]);

//       res.status(200).json({
//         status: 'success',
//         data: {
//           stats
//         }
//       });

//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// };
