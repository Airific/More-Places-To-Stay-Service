const faker = require('faker');
const mongoose = require('mongoose');
const { photos } = require('./photos');

mongoose.connect('mongodb://localhost/morePlacesToStay', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('Connected to MongoDB');
});

const houseSchema = new mongoose.Schema({
  id: Number,
  loc_id: Number,
  houses: Array,
});

const House = mongoose.model('House', houseSchema);

// drop collection first
db.dropCollection('houses', (err) => {
  if (err) {
    console.log('error dropping collection ', err);
  } else {
    console.log('houses dropped');
  }
});

// store newHouse in house array
// eslint-disable-next-line no-unused-vars
const house = [];

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 100; i++) {
  const houseTitles = ['Entire house', 'Private room', 'Entire guest suite', 'Entire guesthouse'];
  const room = ['2 beds', '3 beds', '4 beds'];

  const homes = [];
  for (let j = 0; j < 12; j += 1) {
    const place = {
      title: `${faker.random.arrayElement(houseTitles)} · ${faker.random.arrayElement(room)}`,
      description: faker.fake('{{commerce.productAdjective}} place to stay'),
      price: faker.random.number({
        min: 100,
        max: 250,
      }),
      rating: faker.random.number({
        min: 1,
        max: 5,
      }),
      reviews: faker.random.number({
        min: 1,
        max: 50,
      }),
      image: faker.random.arrayElement(photos),
      superhost: faker.random.boolean(),
    };
    homes.push(place);
  }

  const newHouse = new House({
    id: i + 1,
    loc_id: i + 1,
    houses: homes,
  });
  house.push(newHouse);
}

House.insertMany(house)
  .then(() => {
    console.log('houses have been inserted');
  })
  .catch((err) => {
    console.log('Something wrong with inserting data: ', err);
  });

function getHouses(id, callback) {
  House.find({ id })
    .then((results) => callback(null, results))
    .catch(console.log);
}

module.exports = {
  db,
  getHouses,
};
