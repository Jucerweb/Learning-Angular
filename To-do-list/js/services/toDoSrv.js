(function iife(angular){
  angular
    .module('toDoList')
    .factory('todoFactory', todoFactory);

  function todoFactory(localStorageService){
    var vm = {};
    vm.todo = [];
    if(localStorageService.get("angular-todoList")){
      vm.todo = localStorageService.get("angular-todoList");
    }
    else{
      vm.todo = [];
    }

    vm.addActv = function addActv(newActv){
      vm.todo.push(newActv);
      localStorageService.set("angular-todoList", vm.todo);
    }
    vm.clean = function clean(){
      vm.todo = [];
      localStorageService.set("angular-todoList", vm.todo);
    }
    return vm;
  }
}(angular));
