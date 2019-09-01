module.exports = {
  readFile : (pathTo)=>{
    const fs = require("fs");
    return ( new Promise((resolve, reject) => {
      fs.readFile(pathTo, "utf8", function(err,data) {
        if(err==null){
          resolve(data)
        }else{
          reject(err)
        }
      });
    }))
  }
};
