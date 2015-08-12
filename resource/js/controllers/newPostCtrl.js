(function iffe(angular){
  angular
    .module('app')
    .controller('newPostCtrl', ['$scope', 'postFactory','$location', newPostCtrl]);

  function newPostCtrl($scope, postFactory, $location){
    $scope.post = {};
    $scope.title = "Create Post";
    $scope.savePost = function savePost(){
      postFactory.save({ data: $scope.post }, function(data){
        console.log(data);
        $location.path("/");
      });
    }
  }
}(angular));
