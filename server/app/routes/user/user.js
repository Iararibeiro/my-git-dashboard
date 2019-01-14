const request = require("request");

//for user repository list: https://api.github.com/users/Iararibeiro/repos
module.exports = {
  initializeUser: function(userName) {
    var options = {
      url: 'https://api.github.com/users/' + userName,
      headers: {
        'User-Agent':'request'
      }
    };

    return new Promise(function(resolve, reject){
        request.get(options, function(err, resp, body){
          if (err) {
            reject(err);
          } else {
            resolve(JSON.parse(body));
          }
        })
    })
  }
}
