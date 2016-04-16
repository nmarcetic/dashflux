'use strict';
(function (){
  
    angular.module('dfComponents').controller('dialogCtrl',  dialogCtrl);
    dialogCtrl.$inject = ['$scope', '$mdDialog', '$http'];

    function dialogCtrl ($scope, $mdDialog, $http) {
     
        $scope.closeDialog = function() {
          $mdDialog.hide();
        };

        $scope.addThing = function() {
          if($scope.newThing === '') {
            return;
          }
          $http.post('/api/things', { name: $scope.newThing });
          $scope.newThing = '';
          $mdDialog.hide();
        };
     
    }
    
})();


  
