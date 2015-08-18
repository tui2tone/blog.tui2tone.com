angular.module("app").controller("MainController", ["Post", "Category", "$rootScope", function(Post, Category, $rootScope) {
  var vm;
  $rootScope.WP_SETTING.SITE_TITLE = $rootScope.WP_SETTING.TITLE + " : " + $rootScope.WP_SETTING.DESCRIPTION;
  $rootScope.WP_SETTING.SITE_THUMBNAIL = "";
  vm = this;
  vm.selected_category = "All";
  vm.categories = [];
  vm.loading = false;
  vm.getCategories = function() {
    return Category.getCategories().then(function(data) {
      return vm.categories = data;
    });
  };
  vm.init = function() {
    return vm.getCategories();
  };
  vm.init();
  return vm;
}]);
