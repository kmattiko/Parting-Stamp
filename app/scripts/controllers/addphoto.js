/* global angular Firebase*/
(function() {
  'use strict';

  var app = angular.module('burybox');

    app.controller('PhotoController', function ($firebaseArray) {

      var self = this;

      var firebase = new Firebase('https://sweltering-inferno-1762.firebaseio.com/');

      self.data = $firebaseArray(firebase);
      console.log(self.data);

      self.submit = function() {
        self.data.$add({
          photo: self.photoLoad
        });
        self.photoLoad = '';
      };


    });

//    var app = angular.module('burybox');

//      app.controller('PhotoController', [$firebase, function ($firebase) {

//        var firebase = new Firebase('https://sweltering-inferno-1762.firebaseio.com/');
//        var self = this;

//        self.data = $firebaseArray(firebase);

//        self.submit = function() {
//          self.data.$add({
//            photo: self.photoLoad
//          });
//          self.photoLoad = '';
//        };


//      }]);
  /*function($scope) {
    $scope.list = [];
    $scope.theContent = {
      testField: ''
    };
    // $scope.text = 'howdy';
    $scope.submit = function() {
        $scope.list.push($scope.theContent);
        $scope.theContent = { testField: ''};
      };
    });*/


  //on NG-CLick of submit button img needs to convert to
  //  console.log("test")
  //  var selectedFile = $('#input').get(0).file[0];





  /*  angular.module('burybox')

    .controller('PhotoController', function($http) {
      var photo = this;
      photo.lists = [];

      $http.get('/api/list/photo.json')
        .then(function(response) {
          console.log(response.data);
          photo.lists = response.data;
        });
    });*/



})();
