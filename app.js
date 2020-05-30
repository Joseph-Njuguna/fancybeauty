var express = require('express');
app = express();
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile('./public/index.html', {root:__dirname});
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

