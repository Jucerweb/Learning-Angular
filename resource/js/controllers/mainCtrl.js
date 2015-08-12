(function iffe(angular){
  angular
    .module('app')
    .controller('mainCtrl', ['$scope','$resource', 'postFactory', mainCtrl]);

  function mainCtrl($scope, $resource, postFactory){
    User = $resource("http://jsonplaceholder.typicode.com/users/:id", { id: "@id" });
    $scope.posts = postFactory.query();
    $scope.users = User.query();
    $scope.removePost = function (post) {
      postFactory.delete({id: post.id}, function (data) {
        console.log(data);
      });
      $scope.posts = $scope.posts.filter(function(element){
        return element.id !== post.id;
      });
    }
  }
}(angular));
