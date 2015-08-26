angular.module("app").controller("PostController", ["post", "$document", "$rootScope", "$window", "$http", function(post, $document, $rootScope, $window, $http) {
  var vm;
  $rootScope.WP_SETTING.SITE_TITLE = post.title + " " + post.excerpt + " : " + $rootScope.WP_SETTING.TITLE;
  $rootScope.WP_SETTING.SITE_THUMBNAIL = post.featured_image.source;
  vm = this;
  vm.data = post;
  vm.current_url = $window.location.href;
  vm.shareCount = {
    facebook: 0,
    twitter: 0
  };
  vm.scrollTop = function() {
    return $document.scrollTopAnimated(0, 500);
  };
  vm.init = function() {
    vm.getShareCount();
    return vm.scrollTop();
  };
  vm.getShareCount = function() {
    return $http.get('https://api.facebook.com/method/links.getStats', {
      params: {
        urls: vm.current_url,
        format: "json"
      }
    }).then(function(response) {
      if (response.data.length > 0) {
        return vm.shareCount.facebook = response.data[0].share_count;
      }
    });
  };
  vm.init();
  return vm;
}]);
