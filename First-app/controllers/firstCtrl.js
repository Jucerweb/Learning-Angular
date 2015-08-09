(function iife(angular) {
  angular
    .module('app')
    .controller('firstCtrl', firstCtrl);

  function firstCtrl(){
    var vm = this;
    vm.newComment = {};
    vm.nombre = "jucer";  
    vm.comentarios = [
      {
        comentario: "Buen tutorial",
        username: "Jucer"
      },
      {
        comentario: "Qué mal",
        username: "Orozco"
      }
    ];
    vm.agregarComentarios = function agregarComentarios(){
      vm.comentarios.push(vm.nuevoComentario);
      vm.nuevoComentario = {};
    };
  };
})(angular);