const router = require('express').Router();
let Movie = require('../database-mongo/movieList');
// const { Router } = require('express');


router.get('/', (req, res) => {
    Movie.find()
        .then(movie => res.json(movie))
        .catch(err => res.status(400).json('Error: ' + err));
});

// const test2 = new Movie({
//     moviename: "wiii",
//     category: 'nkznfff',
//     imageurl: "urlfds",
//     description: 'npoooo',
//     releasedate: '2000'
// })
// console.log(test2)
router.post('/addMovie', (req, res) => {
    const moviename = req.body.moviename;
    const category = req.body.category;
    const imageurl = req.body.imageurl
    const description = req.body.description;
    const releasedate = req.body.releasedate;

    const newMovie = new Movie({
        moviename,
        category,
        imageurl,
        description,
        releasedate
    });
    console.log(newMovie)
    newMovie.save()
        .then(() => res.json('new movie added'))
        .catch(err => res.status(400).json('Err ' + err))
})

// TODO: user 
router.post('/wish', (req, res) => {
    const moviename = req.body.moviename;
    const movie = Movie.findOne({ 'moviename': moviename });
    console.log(movie)
    movie.create()
        .then(() => res.json('movie saved'))
        .catch(err => res.status(400).json('Error: ' + err));
})
router.delete('/del', (req, res) => {
    const moviename = req.body.moviename;
    const movie = Movie.deleteOne({ 'moviename': moviename })
        .then(() => res.json('movie deleted'))
        .catch(() => res.status(400).json('Error: ' + err))
})



module.exports = router














