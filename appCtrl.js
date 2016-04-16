(function() {
    'use strict';
	angular.module('myApp', [])
    .controller('AppCtrl', function() {
      var vm = this;
      vm.title = 'Workshop1 Angular Intro';
      vm.contentTitle = '';
      vm.setImagePath = function(){
        if (!vm.imagePath){
            vm.imagePath = 'http://www.catgifs.org/wp-content/uploads/2013/09/119_crazycat_cat_gifs.gif';
        } else {
            vm.imagePath = null;
        }
      };
    });
})();