var connect = require('extensions').getOne('facebookConnect');

module.exports = function(trigger) {
  connect.then(function() {
    FB.Event.subscribe('auth.login', function(response) {
      trigger(response);
    });
  })
};