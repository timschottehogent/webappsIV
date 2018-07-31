var express = require('express');
var router = express.Router();





let mongoose = require('mongoose');
let Recipe = mongoose.model('Recipe');

router.get('/API/recipes/', function(req, res, next) {
  Recipe.find(function(err, recipes) {
    if (err) { return next(err); }
    res.json(recipes);
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('server works');
});

router.post('/API/recipes/', function (req, res, next) {
  let recipe = new Recipe(req.body);
  recipe.save(function(err, rec) {
    if (err){ return next(err); }
    res.json(rec);
  });
}); 

module.exports = router;