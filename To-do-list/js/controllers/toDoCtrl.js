(function iffe(angular){
  angular
    .module('toDoList')
    .controller('toDoCtrl', toDoCtrl);

  function toDoCtrl(todoFactory){
    var vm = this;
    vm.todo = todoFactory.todo;
    vm.addActv = function addActv(){
      todoFactory.addActv(vm.newActv);
      vm.newActv = {};
    }
    vm.clean = function clean(){
      todoFactory.clean();
      vm.todo = todoFactory.todo;
    }
  }

}(angular));
