var fs = require('fs');

Modular = function(dir, ext, callback){
    fs.readdir(dir, (err,data) => {
        if (err) return callback(err);
        const result = data.filter(_ => _.includes("." + ext));
        return callback(null,result);
    });  
};

module.exports = Modular;