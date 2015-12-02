app.controller('TarefasController', ['$scope', function($scope) { // Home page
  $scope.todos = [{
    'title': 'Fazer um app de tarefas',
    'done': false
  }];

  $scope.addTodo = function() {
    $scope.todos.push({'title':$scope.newTodo,'done':false});
    $scope.newTodo = '';
  };

  $scope.clearCompleted = function() {
    $scope.todos = $scope.todos.filter(function(item) {
      return !item.done;
    });
  };
}]);
