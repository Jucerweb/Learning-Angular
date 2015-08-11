(function iffe(angular){
  'use strict';

  angular
    .module('dynamic-form')
    .factory('dynamicFactory', dynamicFactory);

    var inputs = [
      { id: 'input1' },
      { id: 'input2' }
    ];

    function dynamicFactory(){
      return {
        inputs: inputs,
        addNewInput: function() {
          var newInputNo = new Date().getTime();;
          this.inputs.push({ 'id': 'input' + newInputNo });
        },
        removeInput: function(input) {
          this.inputs = this.inputs.filter(function(el) { return el.id != input.id; });
          return this.inputs;
        }
      }
    }
}(angular));
