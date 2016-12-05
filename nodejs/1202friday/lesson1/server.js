var  express = require('express');
var  app = express();

app.get('/', function (req, res) {
   res.send('Hello smm');
});

app.listen(8080, function () {
    console.log('server in running at port 8080')
});