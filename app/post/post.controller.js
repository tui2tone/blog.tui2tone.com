angular.module("app").controller("PostController", ["post", "$document", "$rootScope", function(post, $document, $rootScope) {
  var vm;
  $rootScope.WP_SETTING.SITE_TITLE = post.title + " " + post.excerpt + " : " + $rootScope.WP_SETTING.TITLE;
  $rootScope.WP_SETTING.SITE_THUMBNAIL = post.featured_image.source;
  post.content = post.content.replace(/class="ng-codemirror"/g, 'ui-codemirror="codeMirror.minOptions"');
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
