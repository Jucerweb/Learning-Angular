(function iife(angular){
  angular
    .module('app')
    .controller('firstCtrl', firstCtrl);

  function firstCtrl($http){
    vm = this;
    vm.posts = [];
    $http.get("http://jsonplaceholder.typicode.com/posts")
      .success(function(data){
        console.log(data);
        vm.posts = data;
      })
      .error(function(err){
        console.log(err);
      });
  };
}(angular));