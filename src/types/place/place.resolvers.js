const places = () => {
  return [
    {
      id: 1,
      title: 'Лавка',
      address: 'Октябрьская, 23',
      lat: 53.890247,
      lng: 27.574061,
    },
    {
      id: 2,
      title: 'Европа',
      address: 'Сурганова, 57б',
      lat: 53.929754,
      lng: 27.581715,
    },
  ];
};

function place(_, args) {
  const foundedPlace = places().filter(place => place.id === args.id);
  return foundedPlace && foundedPlace[0];
}

const resolvers = {
  Query: {
    places,
    place,
  },
};

module.exports = resolvers;
