(function() {
'use strict';

    
    angular.module('dfAuth').config(authRoutes);
    /* ngInject deps */
    authRoutes.$inject = ['$httpProvider', '$stateProvider'];

     function authRoutes ($httpProvider, $stateProvider) {

             $stateProvider
                .state('auth', {
                    abstract: true,
                    views: {
                        'main': {
                            templateUrl: 'app/auth/partials/login.html',
                            controller: 'loginCtrl',
                        },
                    },
             });
        
            $stateProvider
                .state('auth.login', {
                    url: '/',
                    views: {
                        'main': {
                            templateUrl: 'app/auth/partials/login.html',
                            controller: 'loginCtrl',
                        },
                    },
             });
     }

})();
