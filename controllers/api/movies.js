var Movie = require('../../models/movie');
var Performer = require('../../models/performer');


module.exports = {
    getAllMovies,
    getOneMovie,
    createMovie,
    updateMovie,
    deleteMovie
}

function getAllMovies(req, res) { 
    let mp = {}
    Movie.find({})
    .populate('cast').exec(function(err, movie) {
    res.status(200).json(movie);
    /*
        .then(foundMovies => {
            console.log(mp);
            console.log(foundMovies)
            */
        })
    }
// )};

function getOneMovie(req, res) { 
    Movie.findById(req.params.id)
    .populate('cast').exec(function(err, movie) {
        res.status(200).json(movie);
    })
};

function createMovie(req, res) {
    Movie.create(req.body)
    .then(function(mov) {
        res.status(201).json(mov);
    });
};


function updateMovie(req, res) {
    Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
    // last object tells mongo/mongoose that you want to display the newedt value 
    .then(function(mov) {
        res.status(200).json(mov);
    });
};

function deleteMovie(req, res) {
    Movie.findByIdAndRemove(req.params.id).then(function(mov) {
        res.status(200).json(mov);
      });
    }
