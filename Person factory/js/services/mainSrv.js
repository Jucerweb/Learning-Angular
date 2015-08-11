(function iife(angular){

  angular.module('app').factory('personFactory', personFactory);

  var amigos = [{nombre: "Edgar", apellido: "Ortega"},
    {nombre: "Richard", apellido: "Roncancio"}];

  var persona = function(){
    return {
      nombre: "",
      apellido: ""
    }

  };

  function personFactory(){
    var vm = {};
    vm.amigos = amigos ;
    vm.showFullname = function showFullname(person){
      console.log(person.nombre + " "+ person.apellido)
    }
    vm.newPersona = function newPersona(){
      return persona();
    }
    vm.createPersona = function createPersona(persona){
      amigos.push(persona);
    }
    return vm;
  }

}(angular));
