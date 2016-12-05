var fs = require('fs');

fs.readFile('example_log.txt', function (err, logData) {
    if (err) throw err;

    var text = logData.toString();

    var results = {};

    var lines = text.split('\n');

    lines.forEach(function(lines) {
        var parts = lines.split(' ');
        var letter = parts[1];
        var count = parseInt(parts[2]);

        results[letter] = parseInt(count);
    });

    console.log(results);
});

