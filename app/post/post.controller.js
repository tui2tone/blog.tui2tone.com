angular.module("app").controller("PostController", ["post", "$document", function(post, $document) {
  var vm;
  vm = this;
  vm.data = post;
  vm.scrollTop = function() {
    return $document.scrollTopAnimated(0, 500);
  };
  vm.init = function() {
    return vm.scrollTop();
  };
  vm.init();
  return vm;
}]);
