module.exports = {
  readFile : (pathTo)=>{
      const fs = require("fs");
    return ( new Promise((resolve, reject) => {
      fs.readFile(pathTo, "utf8", function(err,data) {
        if(err) console.log(err)
        resolve(data)
      });
    }))
  }
};
