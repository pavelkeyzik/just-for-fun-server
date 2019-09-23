const mongoose = require('mongoose');
const config = require('./config');

const db = mongoose.createConnection(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  db,
  Repository: mongoose,
};
