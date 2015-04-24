'use strict';

angular.module('evertheme', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'firebase'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      }).state('work', {
        url: '/work',
        templateUrl: 'app/work/work.html',
        controller: 'WorkCtrl'
      }).state('resume', {
        url: '/resume',
        templateUrl: 'app/resume/resume.html',
        controller: 'ResumeCtrl'
      }).state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
