(function() {
'use strict';
/**
 * App routes config.
 */

  angular.module('dashfluxApp').config(appRoutes);
  appRoutes.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider', '$compileProvider'];
 

   function appRoutes($urlRouterProvider, $stateProvider,  $locationProvider, $compileProvider) {
       $stateProvider.
           state('root', {
             abstract: true,
              views: {
                  'header': {
                      templateUrl: '/app/components/layout/header/header.html',
                      controller: 'headerCtrl'
                  },
                  'main': {
                     templateUrl:'app/components/layout/base/base.html',
                     controller: 'baseCtrl'
                  },
                  'footer':{
                      templateUrl: 'app/components/layout/footer/footer.html',
                      controller: 'footerCtrl'
                  },
              }
           });

      $urlRouterProvider

        .rule(function ($injector, $location) {
          // Remove chars added when using FB connect
            if ($location.hash() === '_=_'){
              $location.hash(null);
            }
          })
        
        .otherwise('/');

        $locationProvider.html5Mode(true);
        
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file):/);
    }
   

})();
