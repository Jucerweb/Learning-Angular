(function iffe(angular){
  angular
    .module('app')
    .controller('postCtrl', ['$scope','$routeParams','postFactory','$location', postCtrl]);

  function postCtrl($scope, $routeParams, postFactory, $location){
    $scope.title = "Edit Post";
    $scope.post = postFactory.get({ id: $routeParams.id });
    $scope.savePost = function savePost(){
      postFactory.update({id: $scope.post.id}, {data: $scope.post}, function(data){
        console.log(data);
        $location.path("/");
      });
    }
  }
}(angular));
