const fs = require('fs');
const Metu = require('./../models/metuModel');
// const metutu = JSON.parse(
//   fs.readFileSync(`${__dirname}/../neteru-app/metutu/metutu.json`),
// );

exports.getAllMetutu = (req, res) => {
  res.status(200).json({
    status: 'success',
    // results: metutu.length,
    // data: {
    //   metutu,
    // },
  });
};

exports.getMetu = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  // const metu = metutu.find((el) => el.id === id);

  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     metu,
  //   },
  // });
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
  } catch (err) {}
};
exports.updateMetu = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      metu: '<Update Metu here...>',
    },
  });
};
exports.deleteMetu = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
