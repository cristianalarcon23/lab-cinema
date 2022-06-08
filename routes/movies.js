const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')

/* GET movies page */
router.get('/', async (req, res, next) => {
    try {
    const movies = await Movie.find({});
    res.render('movies', {movies})
    } 
    catch (error) 
    {
        next(error)
    }
})

router.get('/:_id', async (req, res, next) =>{
    const _id = req.params;
    try{
        const movieDetail = await Movie.findById(_id);
        res.render('detail', movieDetail)
    }
    catch (error) 
    {
        next(error)
    }
})

module.exports = router;