(function iffe(angular){
  angular
    .module('toDoList.controller', ['toDoList.factory'])
    .controller('toDoCtrl', toDoCtrl);

  function toDoCtrl(todoFactory){
    var vm = this;
    vm.todo = todoFactory.getAll();

    vm.addActv = function addActv(){
      todoFactory.addActv(vm.newActv);
      console.log(vm.todo);
      vm.newActv = {};
    }

    vm.removeActv = function removeActv(item){
      vm.todo = todoFactory.removeItem(item);
    }

    vm.clean = function clean(){
       vm.todo = todoFactory.clean();

    }
  }
}(angular));
