var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var modernizr = require('modernizr');

  res.render(
    'index',
    {
      title: 'Detector [BETA] - combined browser- & feature-detection for your app',
      modernizr: modernizr
    }
  );
});

module.exports = router;
