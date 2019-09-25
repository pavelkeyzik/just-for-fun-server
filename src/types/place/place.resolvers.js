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

async function newPlace(_, args) {
  try {
    const { title, address, lat, lng } = args.input;
    const newPlace = new PlaceModel({ title, address, lat, lng });

    return await newPlace.save();
  } catch (error) {
    return error;
  }
}

const resolvers = {
  Query: {
    places,
    place,
  },
  Mutation: {
    newPlace,
  },
};

module.exports = resolvers;
