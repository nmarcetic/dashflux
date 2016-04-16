(function() {
'use strict';
/**
 * Dashboard routes define access routes to dashflux dashboard area.
 * All routes are private and user must be logged in.
 * 
 */

    function  dashboardRoutes($stateProvider) {
        $stateProvider
        .state('root.dashboard', {
            url: '/dashboard',
            views: {
                'main': {
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller: 'dashboardCtrl',
                    // resolve:  {
                    //     currentUser: ['AuthService', function (AuthService) {
                    //        return AuthService.getCurrentUserData();
                    //     }] 
                    // }
                },
            },
        });
    }

dashboardRoutes.$inject = ['$stateProvider'];
angular.module('dfDashboard').config(dashboardRoutes);

})();
