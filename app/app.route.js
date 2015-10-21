angular.module("app").config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true
  });
  $stateProvider.state("main", {
    url: "/",
    controller: "MainController",
    controllerAs: "main",
    abstract: true,
    templateProvider: ["$templateCache", function($templateCache) {
      return $templateCache.get('main/main.html');
    }]
  }).state("main.all_posts", {
    url: "?page",
    controller: "MainPostController",
    controllerAs: "mp",
    params: {
      category: {
        value: null
      }
    },
    templateProvider: ["$templateCache", function($templateCache) {
      return $templateCache.get('main/posts.html');
    }]
  }).state("main.posts", {
    url: "tag/:category?page",
    controller: "MainPostController",
    controllerAs: "mp",
    params: {
      category: {
        value: null
      }
    },
    templateProvider: ["$templateCache", function($templateCache) {
      return $templateCache.get('main/posts.html');
    }]
  }).state("post", {
    url: "/{year:[0-9]{4}}/{month:[0-9]{2}}/:slug/{id:[0-9]*}/",
    controller: "PostController",
    controllerAs: "post",
    templateProvider: ["$templateCache", function($templateCache) {
      return $templateCache.get('post/main.html');
    }],
    resolve: {
      post: ["Post", "$stateParams", function(Post, $stateParams) {
        return Post.getPost($stateParams.id);
      }]
    }
  }).state("preview", {
    url: "/post/preview/:p",
    controller: "PostController",
    controllerAs: "post",
    templateProvider: ["$templateCache", function($templateCache) {
      return $templateCache.get('post/main.html');
    }],
    resolve: {
      post: ["Post", "$stateParams", function(Post, $stateParams) {
        return Post.getPost($stateParams.p);
      }]
    }
  });
  return $urlRouterProvider.otherwise('/');
}]);
