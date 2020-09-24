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
  Id: Number,
  Title: String,
  Description: String,
  Price: Number,
  Rating: Number,
  Reviews: Number,
  Images: String,
  Superhost: Boolean,

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
  const randomHouseTitle = Math.floor(Math.random() * houseTitles.length);
  const room = ['2 beds', '3 beds', '4 beds'];
  const randomRoom = Math.floor(Math.random() * room.length);
  const newHouse = new House({
    Id: i + 1,
    Title: `${houseTitles[randomHouseTitle]} · ${room[randomRoom]}`,
    Description: faker.fake('{{commerce.productAdjective}} place to stay'),
    Price: faker.random.number({
      min: 100,
      max: 250,
    }),
    Rating: faker.random.number({
      min: 1,
      max: 5,
    }),
    Reviews: faker.random.number({
      min: 1,
      max: 50,
    }),
    Images: faker.random.arrayElement(photos),
    Superhost: faker.random.boolean(),
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
  House.find({ Id: id })
    .then((results) => callback(null, results))
    .catch(console.log);
}

module.exports = {
  db,
  getHouses,
};
