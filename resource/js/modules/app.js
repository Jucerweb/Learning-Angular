angular
  .module("app", ["lumx", "ngRoute", "ngResource"])
  .config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        controller: "mainCtrl",
        templateUrl: "templates/home.html"
      })
      .when("/post/:id", {
        controller: "postCtrl",
        templateUrl: "templates/post.html"
      })
      .when("/posts/new",{
        controller: "newPostCtrl",
        templateUrl: "templates/post_form.html"
      })
      .when("/posts/edit/:id",{
        controller: "postCtrl",
        templateUrl: "templates/post_form.html"
      })
  });
