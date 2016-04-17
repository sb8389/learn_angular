(function(){
  'use strict';
    var app = angular.module("userApp", []) ;
    app.controller("userCtrl", function ($scope) {
      $scope.loginError = null;
      $scope.validUser = { 'name' : '' };
      $scope.login = function (){
        if($scope.userName === "sb" && $scope.password === "sb123"){
            $scope.validUser.name = $scope.userName;
            $scope.loginError = null;
        }else{
            $scope.loginError = "Invalid username and password combination";
        }
      }
      $scope.logout = function(){
          $scope.validUser.name = '';
      }
   });

})();
