(function (){
"use strict";
    
    angular.module('dashfluxApp', [
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ngAnimate',
      'ngMessages',
      'ui.router',
      'ngMaterial',
      // dashfluxApp modules
      'dfComponents',
      'dfAuth',
      'dfDashboard'
    ]);
     

})();
