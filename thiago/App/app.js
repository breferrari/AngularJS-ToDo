(function () {
    "use strict";

    var app = angular.module("minhaApp", ["minhaApp.services", "minhaApp.filters", "minhaApp.directives", "ng.deviceDetector"]);

    //Controlador de tarefas
    app.controller("ctrlTodo", function ($scope, validatorService, baseRepository, deviceDetector) {
        //Listagem de tarefas
        $scope.todos = baseRepository.GetAll("tarefas");
        $scope.categories = baseRepository.GetAll("categorias");
        $scope.device = verificarSeEhMobile();

        //Criação do objeto
        bindDeObjetos();

        $scope.adicionar = function () {
            var verificacaoServico = validatorService.validarEmptyAndDuplicate("tarefa", $scope.todo, $scope.todos);
            var temCategoria = validatorService.validarEmpty("category", $scope.todo);

            //Se não tá valido ou se não tem categoria
            if (verificacaoServico && temCategoria) {
                $scope.todos.push($scope.todo);

                //Guardar no banco
                baseRepository.UpdateList("tarefas", $scope.todos);
                bindDeObjetos();
            } else {

                $scope.meuErro = {
                    temErro: true,
                    errorMessage: validatorService.writeMessage()
                };
            }
        };

        $scope.tarefaFoiFeita = function (tarefa) {
            tarefa.isDone = !tarefa.isDone;
        };

        function bindDeObjetos() {
            $scope.todo = {
                tarefa: "",
                isDone: false,
                category: ""
            };

            $scope.meuErro = {
                temErro: false,
                errorMessages: []
            };
        }

        function verificarSeEhMobile() {
            return deviceDetector.device !== "unknown";
        }
    });

    //Controlador de Categorias
    app.controller("ctrlCategory", function ($scope, validatorService, baseRepository) {
        //Listagem de tarefas
        $scope.categories = baseRepository.GetAll("categorias");

        //Criação dos objetos
        bindDeObjetos();

        $scope.adicionar = function () {
            var verificacaoServico = validatorService.validarEmptyAndDuplicate("name", $scope.category, $scope.categories);

            if (verificacaoServico) {
                $scope.categories.push($scope.category);

                //Guardar no banco
                baseRepository.UpdateList("categorias", $scope.categories);

                bindDeObjetos();
            } else {
                $scope.meuErro = {
                    temErro: true,
                    errorMessage: validatorService.writeMessage()
                };
            }
        };

        function bindDeObjetos() {
            $scope.category = {
                name: ""
            };

            $scope.meuErro = {
                temErro: false,
                errorMessage: []
            };
        }
    });
})();
