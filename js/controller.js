app.controller('RootController', ['$scope', function($scope) { // Root
  $scope.savedToDos = localStorage.getItem('todos');
  $scope.todos = (localStorage.getItem('todos') !== null) ? JSON.parse($scope.savedToDos) : [{
    'text': 'Aprender AngularJS',
    'cat': 'Bloco Fixo',
    'done': false
  }, {
    'text': 'Fazer um app com Angular',
    'cat': 'Bloco Fixo',
    'done': false
  }];
  localStorage.setItem('todos', JSON.stringify($scope.todos));

  $scope.savedCategs = localStorage.getItem('categs');
  $scope.categs = (localStorage.getItem('categs') !== null) ? JSON.parse($scope.savedCategs) : [{
    'cat': 'Bloco Fixo'
  }, {
    'cat': 'Bloco Padrão'
  }, {
    'cat': 'Bloco Padrão II'
  }];
  localStorage.setItem('categs', JSON.stringify($scope.categs));
}]);

app.controller('TarefasController', ['$scope', function($scope) { // Tarefas
  $scope.addTodo = function() {
    $scope.todos.push({
      'text': $scope.newTodo,
      'cat': $scope.inCateg.cat,
      'done': false
    });
    $scope.newTodo = '';
    localStorage.setItem('todos', JSON.stringify($scope.todos));
  };

  $scope.todoCheck = function(todo) {
    todo.done = !todo.done;
  };

  $scope.clearCompleted = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done)
        $scope.todos.push(todo);
    });
    localStorage.setItem('todos', JSON.stringify($scope.todos));
  };
}]);

app.controller('CategoriasController', ['$scope', function($scope) { // Categorias
  $scope.addCateg = function() {
    $scope.categs.push({
      'cat': $scope.newCateg
    });
    $scope.newCateg = '';
    localStorage.setItem('categs', JSON.stringify($scope.categs));
  };
  $scope.removeCateg = function() {
    var oldCategs = $scope.categs;
    $scope.categs = [];
    angular.forEach(oldCategs, function(categ) {
      if (categ.cat !== $scope.rmCateg.cat)
        $scope.categs.push(categ);
    });
    localStorage.setItem('categs', JSON.stringify($scope.categs));
  };
}]);
