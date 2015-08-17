angular.module("app").controller("MainController", ["Post", "Category", function(Post, Category) {
  var vm;
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
