(function iife(angular){
  angular.module('app').controller('personaCtrl',personaCtrl);

  function personaCtrl(personFactory){
    var vm = this;
    vm.persona = personFactory.newPersona();
    vm.personas = personFactory.amigos;
    vm.createPersona = function createPersona(isValid){
      if(isValid){
        personFactory.createPersona(vm.persona);
        vm.persona = personFactory.newPersona();

      }
    }
  }

}(angular));
