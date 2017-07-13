const express = require('express')
const app = express()
const users = require('./users.js')

var router = express.Router();


router.get('/users', function(req, res) {
    res.json(users);
});

app.use('/api', router);

app.listen(5001, function () {
  console.log('Server running on 5001!')
})
