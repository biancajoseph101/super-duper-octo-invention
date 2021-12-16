const mongoose = require('mongoose');
const CitySchema = require('./city');
const ExperienceSchema = require('./experience');

const City = mongoose.model('cities', CitySchema);
const Experience = mongoose.model('experiences', ExperienceSchema);

module.exports = {
  City,
  Experience
};
