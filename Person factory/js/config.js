(function iffe(angular){
  angular.module('app').config(configuration);

  function configuration($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/first');
    $stateProvider
      .state('index',
        {
         url: '/first',
         templateUrl: 'js/templates/index.html',
         controller: 'mainCtrl',
         controllerAs: 'main'
        })
      .state('persona', {
        url: '/persona',
        templateUrl: 'js/templates/personas.html',
        controller: 'personaCtrl',
        controllerAs: 'create'
      });

  }


}(angular));
