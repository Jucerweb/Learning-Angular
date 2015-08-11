(function iife(angular){
  angular
    .module('app.ctrl',[])
    .controller('mainCtrl', mainCtrl);

  function mainCtrl($scope ){
    var vm = this;
    vm.nombre = "jucer";

    setTimeout(function(){
      $scope.$apply(function(){
        vm.nombre = "other";
      });
    },2000);
  }

}(angular))
