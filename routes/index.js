var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var Browscap = require('browscap-js'),
    browscap = new Browscap(),
    ua = req.headers['user-agent'],
    browser;

  console.log('User-Agent: ' + ua);

  browser = browscap.getBrowser(ua);
  console.log(JSON.stringify(browser));

  res.render(
    'index',
    {
      title: 'Detector [BETA] - combined browser- & feature-detection for your app',
      ua: ua,
      browser: browser
    }
  );
});

router.get('/features', function(req, res) {
  var capabilities = require('../data/capabilities.js');

  res.render(
    'features',
    {
      title: 'Detector [BETA] - combined browser- & feature-detection for your app',
      capabilities: capabilities
    }
  );
});

router.get('/downloads', function(req, res) {
  res.render(
    'downloads',
    {
      title: 'Detector [BETA] - combined browser- & feature-detection for your app'
    }
  );
});

module.exports = router;
