(function iffe(angular){
  'use strict';

  angular
    .module('dynamic-form')
    .controller('dynamicCtrl', dynamicCtrl);

  function dynamicCtrl(dynamicFactory){
    var vm = this;
    vm.inputs = dynamicFactory.inputs;
    vm.addNewInput = function addNewInput(){
      dynamicFactory.addNewInput();
    };
    vm.removeInput = function removeInput(input){
      vm.inputs = dynamicFactory.removeInput(input);
    };
  }

}(angular));
