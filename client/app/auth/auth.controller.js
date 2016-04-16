(function (){
"use trict";
    
    // Register loginCtrl
    angular.module('dfAuth').controller('loginCtrl', loginCtrl);
    // Inject deps
    loginCtrl.$inject = ['$log', '$scope'];

    function loginCtrl ($log, $scope) {
        
        $log.info("Hello from loginCtrl");

    };


})();
