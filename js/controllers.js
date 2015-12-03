app.controller('RootController', ['$scope', function($scope) { // Root
  $scope.savedToDos = localStorage.getItem('todos');
  $scope.todos = (localStorage.getItem('todos') !== null) ? JSON.parse($scope.savedToDos) : [{
    'text': 'Aprender AngularJS',
    'cat': 'Programação',
    'done': true
  }, {
    'text': 'Fazer um app com AngularJS',
    'cat': 'Programação',
    'done': true
  }, {
    'text': 'Apresentar Projeto Final',
    'cat': 'Faculdade',
    'done': false
  }];
  localStorage.setItem('todos', JSON.stringify($scope.todos));

  $scope.savedCategs = localStorage.getItem('categs');
  $scope.categs = (localStorage.getItem('categs') !== null) ? JSON.parse($scope.savedCategs) : [{
    'cat': 'Casa'
  }, {
    'cat': 'Trabalho'
  }, {
    'cat': 'Compras'
  }, {
    'cat': 'Mercado'
  }, {
    'cat': 'Programação'
  }, {
    'cat': 'Estudos'
  }];
  localStorage.setItem('categs', JSON.stringify($scope.categs));

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  // app.filter("getByCategory", function () {
  //     return function (items, category) {
  //         var filtered = [];
  //         angular.forEach(items, function (item) {
  //             if ((item.category.name === category) || !angular.isDefined(category))
  //                 filtered.push(item);
  //         });
  //         return filtered;
  //     };
  // });
}]);

app.controller('TarefasController', ['$scope', function($scope) { // Tarefas
  $scope.addTodo = function() {
    var addToArrayToDo = true;
    var addToArrayCat = true;

    for (var i = 0; i < $scope.todos.length; i++) {
      if ($scope.todos[i].text === $scope.newTodo) {
        addToArrayToDo = false;
      }
    }
    for (var x = 0; x < $scope.todos.length; x++) {
      if ($scope.todos[x].cat === $scope.inCateg.cat) {
        addToArrayCat = false;
      }
    }
    if ((addToArrayToDo === false) && (addToArrayCat === false)) {
      swal({
        title: "Tarefa já existe!",
        type: "error",
        timer: 1000,
        showConfirmButton: false
      });
    }
    if ((addToArrayToDo === true) && (addToArrayCat === true)) {
      $scope.todos.push({
        'text': $scope.newTodo,
        'cat': $scope.inCateg.cat,
        'done': false
      });
      $scope.newTodo = '';
      localStorage.setItem('todos', JSON.stringify($scope.todos));
    }
    if ((addToArrayToDo === false) && (addToArrayCat === true)) {
      $scope.todos.push({
        'text': $scope.newTodo,
        'cat': $scope.inCateg.cat,
        'done': false
      });
      $scope.newTodo = '';
      localStorage.setItem('todos', JSON.stringify($scope.todos));
    }
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
    var addToArrayCateg = true;
    for (var z = 0; z < $scope.categs.length; z++) {
      if ($scope.categs[z].cat === $scope.newCateg) {
        addToArrayCateg = false;
        swal({
          title: "Categoria já existe!",
          type: "error",
          timer: 1000,
          showConfirmButton: false
        });
        $(".formAddCateg").submit(function(e) {
          e.preventDefault();
        });
      }
    }
    if (addToArrayCateg) {
      $scope.categs.push({
        'cat': $scope.newCateg
      });
      $scope.newCateg = '';
      localStorage.setItem('categs', JSON.stringify($scope.categs));
    }
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