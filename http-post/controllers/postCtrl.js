(function iffe(angular){
  angular.module('app')
    .controller('postCtrl', postCtrl);

  function postCtrl($http){
    vm = this;
    vm.posts = [];
    vm.newPost = {};
    $http.get("http://jsonplaceholder.typicode.com/posts/")
      .success(function(data){
        vm.posts = data;
      })
      .error(function(err){
        console.log(err);
      });
    vm.addPost = function addPost(){
      $http.post("http://jsonplaceholder.typicode.com/posts/",{
        title: vm.newPost.title,
        body: vm.newPost.body,
        userId: 1
      })
      .success(function(data, status, headers, config){
        console.log(data);
        console.log(status,headers,config);
        vm.posts.push(data);
        vm.newPost = {};
      })
      .error(function(error, status, headers, config){

      });
    };
  };
}(angular));