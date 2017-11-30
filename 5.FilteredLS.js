var fs = require('fs');
var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, (err,data) => {
    if (err) return console.error(err);
    const result = data.filter(_ => _.includes(ext));
    result.forEach(element => {
        console.log(element);
    });
});