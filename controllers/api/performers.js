const Movie = require('../../models/movie');
const Performer = require('../../models/performer');


module.exports = {
    getAllPerformers,
    getOnePerformer,
    createPerformer,
    updatePerformer,
    deletePerformer
}

function getAllPerformers(req, res) { 
    Performer.find({})
    .then(foundPerformers => {
    res.status(200).json(foundPerformers);
        })
    };


function getOnePerformer(req, res) { 
    Performer.findById(req.params.id)
    .then(foundPerformer => {
        res.status(200).json(foundPerformer);
            })
};

function createPerformer(req, res) {
    Performer.create(req.body)
    .then(function(p) {
        res.status(201).json(p);
    });
};


function updatePerformer(req, res) {
    Performer.findByIdAndUpdate(req.params.id, req.body, {new: true})
    // last object tells mongo/mongoose that you want to display the newedt value 
    .then(function(p) {
        res.status(200).json(p);
    });
};

function deletePerformer(req, res) {
    Performer.findByIdAndRemove(req.params.id).then(function(p) {
        res.status(200).json(p);
      });
    }
