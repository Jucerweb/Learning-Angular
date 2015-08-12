(function iffe(angular){
  angular
    .module('app')
    .factory('postFactory', ['$resource', postFactory]);

  function postFactory($resource){
    return $resource("http://jsonplaceholder.typicode.com/posts/:id", { id: "@id" },{update: {method: "PUT" }});
  }
}(angular));
