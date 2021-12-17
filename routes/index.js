const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));

router.post('/cities', controllers.createCity);

router.post('/experiences', controllers.createExperience);

router.get('/cities', controllers.getAllCities);

router.get('/experiences', controllers.getAllExperiences);

router.get('/cities/details/:_id', controllers.getCityById);

router.get('/experiences/details/:_id', controllers.getExperienceById);

router.put('/cities/details/:_id', controllers.updateCity);

router.put('/experiences/details/:_id', controllers.updateExperience);

router.delete('/cities/details/:_id', controllers.deleteCity);

router.delete('/experiences/details/:_id', controllers.deleteExperience);

module.exports = router;
