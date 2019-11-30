/* eslint-disable no-console */
const mongoose = require('mongoose');
// eslint-disable-next-line import/newline-after-import
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

process.on('uncaughtException', err => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');

  process.exit(1);
});

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connnection successful!'));

const port = process.env.port || 3001;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
