const mongoose = require('mongoose');
const fs = require('fs');
const express = require('express');

const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

app.use(express.json());

const metutu = JSON.parse(
  fs.readFileSync(`${__dirname}/neteru-app/metutu/metutu.json`)
);

app.get('/api/v1/metutu', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: metutu.length,
    data: {
      metutu,
    },
  });
});

app.get('/api/v1/metutu/:id', (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  if (id > metutu.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  const metu = metutu.find(el => el.id === id);
  res.status(200).json({
    status: 'success',
    data: {
      metu,
    },
  });
});

app.post('/api/v1/metutu', (req, res) => {
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
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
