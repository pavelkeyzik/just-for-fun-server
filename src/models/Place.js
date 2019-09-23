const { Repository, db } = require('../db');

const schema = new Repository.Schema(
  {
    title: String,
    address: String,
    lat: Number,
    lng: Number,
    ttt: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

const model = db.model('Place', schema, 'Places');

module.exports = model;
