var express = require('express'),
    app = express();

// app.get('/', function (req, res) {
//     res.send('Hello World');
// });
//
// app.listen(3000, function () {
//     console.log('app is listening at port 3000')
// })

app.use(express.static(__dirname + '/public'));

app.listen(8080, function () {
    console.log('ok');
});