var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getFollowers/:user', function (req, res, next) {
  var GitHubApi = require("github");

  var github = new GitHubApi({});

  github.users
    .getFollowingForUser({
      username: req.params.user
    }, function (err, data) {
      console.log(data);
      res.json(data);
      
    });

});

module.exports = router;
