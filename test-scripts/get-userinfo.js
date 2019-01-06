const request = require("request");
var userDetails;

//for user repository list: https://api.github.com/users/Iararibeiro/repos
function initialize() {
  var options = {
    url: 'https://api.github.com/users/Iararibeiro/',
    headers: {
      'User-Agent':'request'
    }
  };

  return new Promise(function(resolve, reject){
      //async job
      request.get(options, function(err, resp, body){
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(body));
        }
      })
  })
}

function main(){
  var initializePromise = initialize();
  initializePromise.then(function(result){
    userDetails = result;
    console.log("Initialized user details");
    console.log(userDetails);
  }, function(err) {
    console.log(err);
  });
}

main();
