(function () {
    "use strict";

    var app = angular.module("minhaApp.filters", []);

    //Filtro de Apenas feitas
    app.filter("onlyDone", function () {
        return function (items, isDone) {
            var filtered = [];
            angular.forEach(items, function (item) {
                if ((isDone && item.isDone) || !isDone)
                    filtered.push(item);
            });
            return filtered;
        };
    });

    //Filtro de este tipo de categoria
    app.filter("getByCategory", function () {
        return function (items, category) {
            var filtered = [];
            angular.forEach(items, function (item) {
                if ((item.category.name === category) || !angular.isDefined(category))
                    filtered.push(item);
            });
            return filtered;
        };
    });

})();
