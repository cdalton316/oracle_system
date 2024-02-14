const path = require('path');
const express = require('express');
const morgan = require('morgan');
const metuRouter = require('./routes/metutuRoutes');
const userRouter = require('./routes/userRoutes');
const pug = require('pug');
const dotenv = require('dotenv');
const exp = require('constants');
dotenv.config({ path: './config.env' });
const viewRouter = require('./routes/viewRoutes');

const app = express();
// 1) MiddleWare
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'sass')));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// 3) ROUTES

app.use('/', viewRouter);
app.use('/api/v1/metutu', metuRouter);
app.use('/api/v1/users', userRouter);
app.all('*', (req, res) => {
  console.log(req.originalUrl);
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`,
  });
  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  err.status = 'fail';
  err.statusCode = 404;
  next(err);
});
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});
module.exports = app;
