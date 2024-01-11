const fs = require('fs');

const metutu = JSON.parse(
  fs.readFileSync(`${__dirname}/../neteru-app/metutu/metutu.json`)
);
exports.checkID = (req, res, next, val) => {
  console.log(`Metu id is: ${val}`);
  if (req.params.id * 1 > metutu.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};

exports.getAllMetutu = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: metutu.length,
    data: {
      metutu,
    },
  });
};

exports.getMetu = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  const metu = metutu.find(el => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      metu,
    },
  });
};
exports.createMetu = (req, res) => {
  console.log(req.body);
  const newId = metutu[metutu.length - 1].id + 1;

  const newMetutu = Object.assign({ id: newId }, req.body);

  metutu.push(newMetutu);
  fs.writeFile(
    `${__dirname}/neteru-app/metutu/metutu.json`,
    JSON.stringify(metutu),
    err => {
      res.status(201).json({
        status: 'success',
        data: {
          metutu: newMetutu,
        },
      });
    }
  );
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
