(function(){
  'use strict';
    var app = angular.module("userApp", []) ;
    app.controller("userCtrl", function ($scope) {
      $scope.validUser = { 'name' : '' };
      $scope.login = function (){
        if($scope.userName === "sb" && $scope.password === "sb123"){
            $scope.validUser.name = $scope.userName;
        }else{
            $scope.validUser = { 'name' : '' };
        }
      }
   });

})();
