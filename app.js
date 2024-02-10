const express = require('express');
const morgan = require('morgan');
const metuRouter = require('./routes/metutuRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
const dotenv = require('dotenv');
const exp = require('constants');
dotenv.config({ path: './config.env' });

// 1) MiddleWare
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/neteru-app`));

// 3) ROUTES

app.use('/api/v1/metutu', metuRouter);
app.use('/api/v1/users', userRouter);
app.all('*', (req, res) => {
  console.log(req.originalUrl);
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});
module.exports = app;
