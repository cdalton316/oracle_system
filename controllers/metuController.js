const fs = require('fs');
const Metu = require('./../models/metuModel');
// const metutu = JSON.parse(
//   fs.readFileSync(`${__dirname}/../neteru-app/metutu/metutu.json`),
// );

exports.getAllMetutu = async (req, res) => {
  try {
    //BUILD QUERY
    const queryObj = { ...req.query };
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => {
      `$${match}`;
    });
    console.log(JSON.parse(queryStr));

    let query = Metu.find(JSON.parse(queryStr));
    if (req.query.sort) {
      query = query.sort(req.query.sort);
    }
    // EXECUTE QUERY
    const metutu = await query;
    res.status(200).json({
      status: 'success',
      results: metutu.length,
      data: {
        metutu,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getMetu = async (req, res) => {
  try {
    const metu = await Metu.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        metu,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
  // console.log(req.params);
  // const id = req.params.id * 1;
  // const metu = metutu.find((el) => el.id === id);
};
exports.createMetu = async (req, res) => {
  try {
    const newMetu = await Metu.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        metutu: newMetu,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.updateMetu = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
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
