const express = require('express');
const config = require('config');
const chalk = require('chalk');
const cors = require('cors');
const mongoose = require('mongoose')
const initDatabase = require('./startUp/initDatabase')
const app = express();
const routes = require('./routes')



app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use('/api', routes);


const PORT = config.get('port') ?? 8080;

async function start() {
  try {
    mongoose.connection.once('open', () => {
      console.log(chalk.green(`MongoDB connected!`));
      initDatabase();
    })
    await mongoose.connect(config.get('mongoUri'));
    app.listen(8080, () => {
      console.log(chalk.green(`Server has been started on port ${PORT}`));
    })
  } catch (e) {
    console.log(chalk.red(e.message));
    process.exit(1);
  }
  
}

start();