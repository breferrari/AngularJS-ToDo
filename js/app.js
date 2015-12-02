var app = angular.module("TpApp", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "templates/home.html",
      controller: 'HomeController'
    });
});
