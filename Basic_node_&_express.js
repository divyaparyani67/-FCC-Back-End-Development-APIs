let express = require('express');
let app = express();
console.log("Hello World");

app.use('/public', express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next()
});

app.route('/name').get(function(req, res) {
  console.log(req.query)
  res.json({ name: `${req.query.first} ${req.query.last}` });
})

app.get('/:word/echo', function(req, res) {

  res.json({ echo: req.params.word });
});

app.get('/now', function(req, res, next) {
  req.time = (new Date()).toString();
  next()
}, function(req, res) {
  res.json({ time: req.time })
});

app.get('/json', function(req, res) {
  const helloJSON = "Hello json";
  let message;
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = helloJSON.toUpperCase();
  } else {
    message = helloJSON
  }
  const data = {
    "message": message
  };
  res.json(data);
})

app.get('/', (req, res) => {
  absolutePath = __dirname + '/views/index.html'

  res.sendFile(absolutePath);

});



module.exports = app;






































module.exports = app;
