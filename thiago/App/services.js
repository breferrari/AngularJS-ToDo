(function () {
    "use strict";

    var app = angular.module("minhaApp.services", []);

    //Services - Criando servico de validação
    app.service("validatorService", function () {
        var meuErro = [];

        //Criar Método de validação de Objeto duplicado e etc
        this.validarEmptyAndDuplicate = function (nameOfField, objToValidate, listOfElements) {

            if (!this.validarEmpty(nameOfField, objToValidate) || this.validarDuplicadas(nameOfField, objToValidate, listOfElements))
                return false;

            return true;
        };

        //Validar duplicatas
        this.validarDuplicadas = function (nameOfField, objToValidate, listOfElements) {

            var jaExiste = false;

            //Verificar se já existe uma tarefa igual
            angular.forEach(listOfElements, function (todo) {
                if (objToValidate[nameOfField] === todo[nameOfField]) {
                    jaExiste = true;
                }
            });

            if (jaExiste) {
                meuErro.push("Já Existe!");
            }

            return jaExiste;
        };

        //Validar Empty
        this.validarEmpty = function (nameOfField, objToValidate) {
            //Verificar se objeto é diferente de null e/ou empty
            var result = objToValidate[nameOfField];

            var definido = angular.isDefined(result);

            if (definido && result) {
                return true;
            }
            meuErro.push(nameOfField + " is Required");
            return false;
        };

        //Retornar Erro
        this.writeMessage = function () {
            //Colocar valor em variavel local
            var toReturn = meuErro;

            //Resetar valores de erro
            this.resetErrors();

            //Retornar erros
            return toReturn;
        };

        this.resetErrors = function () {
            meuErro = [];
        };
    });

    ////Criando repositorio
    app.service("baseRepository", function () {

        //Salvar no LocalStorage
        this.UpdateList = function (typeName, obj) {

            localStorage.setItem(typeName, angular.toJson(obj));
        };

        this.GetAll = function (typeName) {
            var pegei = localStorage[typeName];

            if (pegei)
                return JSON.parse(pegei);

            return [];
        };
    });
})();
