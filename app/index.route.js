(function() {
  'use strict';

  angular
    .module('improvedAngularStackoveflow')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'allCtrl',
        controllerAs: 'allCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'allCtrl'
        //controllerAs: 'answer'
      })
      ;

    $urlRouterProvider.otherwise('/');
  }

})();
