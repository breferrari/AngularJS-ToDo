// var module = angular.module('TpModule', []);

module.service("repo", function() {
  // Loads to localStorage
  this.getAll = function(typeName) {
    if (localStorage[typeName]) {
      return JSON.parse(localStorage[typeName]);
    }
    return [];
  };
  // Saves to LocalStorage
  this.updateStorage = function(typeName, obj) {
    localStorage.setItem(typeName, angular.toJson(obj));
  };

  this.testFunction = function() {
    console.log("It works!");
  };
});
