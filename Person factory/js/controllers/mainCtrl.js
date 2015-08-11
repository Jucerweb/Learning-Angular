(function iife(angular){
  angular.module('app').controller('mainCtrl',mainCtrl);

  function mainCtrl($scope, personFactory){
    var vm = this;
    vm.person = personFactory;
    vm.showMessage = function showMessage(message){
      console.log(message);
    }
    vm.fullname = vm.person.showFullname;
  }
}(angular));


