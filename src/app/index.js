'use strict';

angular.module('evertheme', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'firebase', 'angular-google-analytics'])
.config(function ($stateProvider, $urlRouterProvider, AnalyticsProvider) {
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

  // initial configuration 
  AnalyticsProvider.setAccount('UA-62010516-1');
  // using multiple tracking objects (analytics.js only) 
  // AnalyticsProvider.setAccount([ 
  //   { tracker: 'UA-12345-12', name: "tracker1" }, 
  //   { tracker: 'UA-12345-34', name: "tracker2" } 
  // ]); 

  // track all routes (or not) 
  AnalyticsProvider.trackPages(true);

  //Optional set domain (Use 'none' for testing on localhost) 
  //AnalyticsProvider.setDomainName('XXX'); 

  // url prefix (default is empty) 
  // - for example: when an app doesn't run in the root directory 
  //AnalyticsProvider.trackPrefix('et-kevin-crawford');

  // Use analytics.js instead of ga.js 
  AnalyticsProvider.useAnalytics(true);

  // Use cross domain linking 
  //AnalyticsProvider.useCrossDomainLinker(true);
  //AnalyticsProvider.setCrossLinkDomains(['domain-1.com', 'domain-2.com']);

  // Ignore first page view... helpful when using hashes and whenever your bounce rate looks obscenely low. 
  AnalyticsProvider.ignoreFirstPageLoad(true);

  //Enabled eCommerce module for analytics.js 
  //AnalyticsProvider.useECommerce(true);

  //Enable enhanced link attribution 
  AnalyticsProvider.useEnhancedLinkAttribution(true);

  //Enable analytics.js experiments 
  //AnalyticsProvider.setExperimentId('12345');

  //Set custom cookie parameters for analytics.js 
  AnalyticsProvider.setCookieConfig({
    cookieDomain: 'kevin-crawford.com',
    cookieName: 'ga',
    cookieExpires: 20000
  });

  // change page event name 
  AnalyticsProvider.setPageEvent('$stateChangeSuccess');
}).run(function(Analytics) {
  // In case you are relying on automatic page tracking, you need to inject Analytics 
  // at least once in your application (for example in the main run() block) 
});
