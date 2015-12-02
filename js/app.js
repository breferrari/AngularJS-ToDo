var app = angular.module("TpApp", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('tarefas', {
      url: "/",
      templateUrl: "templates/tarefas.html",
      controller: 'TarefasController'
    })
    .state('categorias', {
      url: "/categorias",
      templateUrl: "templates/categorias.html",
      controller: 'CategoriasController'
    });
});
