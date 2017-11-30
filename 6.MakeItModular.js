var dir = process.argv[2];
var ext = process.argv[3];
var mymodule = require('./6.Module')
    
    mymodule(dir,ext, function(err,result){
        if (err) console.error(err);
        result.forEach(element => {
            console.log(element);
        });
    });