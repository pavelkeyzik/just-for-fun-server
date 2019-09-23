const PlaceModel = require('../../models/Place');

async function places() {
  try {
    return await PlaceModel.find();
  } catch (error) {
    return error;
  }
}

async function place(_, args) {
  try {
    return await PlaceModel.findById(args.id);
  } catch (error) {
    return error;
  }
}

const resolvers = {
  Query: {
    places,
    place,
  },
};

module.exports = resolvers;
