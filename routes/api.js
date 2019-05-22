var express = require('express');
var router = express.Router();
const apiCtrl = require('../controllers/api/movies');
const apiPCtrl = require('../controllers/api/performers');

router.get('/movies', apiCtrl.getAllMovies);
router.get('/movies/:id', apiCtrl.getOneMovie);
router.post('/movies', apiCtrl.createMovie);
router.put('/movies/:id', apiCtrl.updateMovie);
router.delete('/movies/:id', apiCtrl.deleteMovie);

router.get('/performers', apiPCtrl.getAllPerformers);
router.get('/performers/:id', apiPCtrl.getOnePerformer);
router.post('/performers', apiPCtrl.createPerformer);
router.put('/performers/:id', apiPCtrl.updatePerformer);
router.delete('/performers/:id', apiPCtrl.deletePerformer);

module.exports = router;
