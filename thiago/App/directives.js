(function () {
    "use strict";

    var app = angular.module("minhaApp.directives", []);

    //Criação do menu
    app.directive("myMenu", function () {
        return {
            templateUrl: "my-menu.html",
            scope: {
                page: "="
            }
        };
    });
})();
