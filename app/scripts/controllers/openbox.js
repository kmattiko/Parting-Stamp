(function(){
'use strict';

var app = angular.module('burybox')
  app.controller('NewBoxController', function(Auth){

  var self = this;

  Auth.onAuth(function(user, authUser){
      self.user = user;
  });
console.log(self.user)
})

})();
