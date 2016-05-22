var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var Browscap = require('browscap-js'),
    browscap = new Browscap(),
    ua = req.headers['user-agent'],
    browser,
    capabilities = require('../data/capabilities.js');

  console.log('User-Agent: ' + ua);

  browser = browscap.getBrowser(ua);
  console.log(JSON.stringify(browser));

  res.render(
    'index',
    {
      title: 'Detector [BETA] - combined browser- & feature-detection for your app',
      ua: ua,
      browsername: browser['Browser'],
      devicename: browser['Device_Name'],
      mobile: browser['isMobileDevice'],
      tablet: browser['isTablet'],
      bot: browser['Crawler'],
      capabilities: capabilities
    }
  );
});

module.exports = router;
