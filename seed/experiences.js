const db = require('../db');
const City = require('../models/city');
const Experience = require('../models/experience');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const melbourne = await City.find({ name: 'Melbourne' });
  const cairns = await City.find({ name: 'Cairns' });
  const hobart = await City.find({ name: 'Hobart' });
  const brisbane = await City.find({ name: 'Brisbane' });

  const experiences = [
    {
      bucketlist_item:
        'Ride the City Circle Tram to Parliament House and Federation Square',
      city_id: melbourne[0]._id
    },
    {
      bucketlist_item:
        'Pet a koala',
      city_id: melbourne[0]._id
    },
    {
      bucketlist_item:
        'Learn melly slang',
      city_id: melbourne[0]._id
    },
    {
      bucketlist_item: 'Take the Kuranda Scenic Railway',
      city_id: cairns[0]._id
    },
    {
      bucketlist_item: 'Try vegemite',
      city_id: cairns[0]._id
    },
    {
      bucketlist_item: 'Climb Mt. Wellington',
      city_id: hobart[0]._id
    },
    {
      bucketlist_item: 'Visit Jemma',
      city_id: hobart[0]._id
    },
    {
      bucketlist_item: 'Visit the GoMA',
      city_id: brisbane[0]._id
    }
    {
      bucketlist_item: 'Go snorkeling',
      city_id: brisbane[0]._id
    }
  ];

  await Experience.insertMany(experiences);
  console.log('Created experiences!');
};

const run = async () => {
  await main();
  db.close();
};

run();
