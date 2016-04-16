(function (){
"use trict";
    
    
    // Register dashboardCtrl
    angular.module('dfDashboard').controller('dashboardCtrl', dashboardCtrl);
    // Inject deps
    dashboardCtrl.$inject = ['$log', '$scope'];

    function dashboardCtrl ($log, $scope) {

      $log.info("Hello from dashboardCtrl");


    };


})();
