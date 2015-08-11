(function iife(angular){
  angular
    .module('toDoList.factory', ['LocalStorageModule'])
    .factory('todoFactory', ['localStorageService', todoFactory]);

  function todoFactory(localStorageService){
    var factory = {};
    factory.key = "angular-todoList";
    if(localStorageService.get(factory.key)){
      factory.activities = localStorageService.get(factory.key);
    } else {
      factory.activities = [];
    }

    factory.addActv = function addActv(newActv){
      factory.activities.push(newActv);
      factory.updaLocalStorage();
    }

    factory.updaLocalStorage = function updaLocalStorage(){
      localStorageService.set(factory.key, factory.activities);
    }

    factory.clean = function clean(){
      factory.activities = [];
      factory.updaLocalStorage();
      return factory.getAll();
    }

    factory.getAll = function getAll(){
      return factory.activities;
    }

    factory.removeItem = function removeItem(item){
      factory.activities = factory.activities.filter(function(activity){
        return activity !== item ;
      });
      factory.updaLocalStorage();
      return factory.getAll();
    }

    return factory;
  }
}(angular));
