const City = require('../models/city');
const Experience = require('../models/experience');
const { process_params } = require('express/lib/router');

const createCity = async (req, res) => {
  try {
    const city = await new City(req.body);
    await city.save();
    return res.status(201).json({
      city
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const createExperience = async (req, res) => {
  try {
    console.log(req.body);
    const experience = await new Experience(req.body);
    await experience.save();
    return res.status(201).json({
      experience
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    return res.status(200).json({ cities });
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find();
    return res.status(200).json({ experiences });
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const getCityById = async (req, res) => {
  try {
    const { _id } = req.params;
    const city = await City.findById(_id);
    if (city) {
      return res.status(200).json({ city });
    }
    return res.status(404).send(`City with the specified ID does not exists`);
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const getExperienceById = async (req, res) => {
  try {
    const { _id } = req.params;
    const experience = await Experience.findById(_id);
    if (experience) {
      return res.status(200).json({ experience });
    }
    return res
      .status(404)
      .send(`Experience with the specified ID does not exists`);
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const updateExperience = async (req, res) => {
  try {
    const { _id } = req.params;
    console.log(req);
    await Experience.findByIdAndUpdate(
      _id,
      req.body,
      { new: true },
      (err, experience) => {
        if (err) {
          res.status(500).send(err);
        }
        if (!experience) {
          res.status(500).send('Experience not found!');
        }
        return res.status(200).json(experience);
      }
    );
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const updateCity = async (req, res) => {
  try {
    const { _id } = req.params;
    await City.findByIdAndUpdate(_id, req.body, { new: true }, (err, city) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!city) {
        res.status(500).send('City not found!');
      }
      return res.status(200).json(city);
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const deleteCity = async (req, res) => {
  try {
    const { _id } = req.params;
    const deleted = await City.findByIdAndDelete(_id);
    if (deleted) {
      return res.status(200).send('City deleted');
    }
    throw new Error('City not found');
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const deleteExperience = async (req, res) => {
  try {
    const { _id } = req.params;
    const deleted = await Experience.findByIdAndDelete(_id);
    if (deleted) {
      return res.status(200).send('Experience deleted');
    }
    throw new Error('Experience not found');
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

module.exports = {
  createCity,
  createExperience,
  getAllCities,
  getAllExperiences,
  getCityById,
  getExperienceById,
  deleteCity,
  deleteExperience,
  updateExperience,
  updateCity
};
