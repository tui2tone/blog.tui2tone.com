angular.module("app").controller("MainPostController", ["Post", "Category", "$state", "$stateParams", function(Post, Category, $state, $stateParams) {
  var vm;
  vm = this;
  vm.selected_category = $stateParams.category || "All";
  vm.paging = {
    page: $stateParams.page || 1,
    loaded: false
  };
  vm.posts = [];
  vm.loading = false;
  vm.getPosts = function() {
    var params;
    vm.loading = true;
    params = {};
    params.order = "DESC";
    params.orderby = "date";
    params.posts_per_page = 10;
    if (vm.selected_category !== "All") {
      params.category_name = vm.selected_category;
    }
    params.page = vm.paging.page;
    return Post.getPosts(params).then(function(data) {
      console.log(data);
      vm.loadingData(data);
      return vm.loading = false;
    });
  };
  vm.loadingData = function(data) {
    var delay, params;
    if (data.length === 0) {
      vm.paging.loaded = true;
      vm.paging.page--;
    }
    params = {};
    if (vm.selected_category !== "All") {
      params.category = vm.selected_category;
    }
    if (vm.paging.page > 1) {
      params.page = vm.paging.page;
    }
    $state.go($state.current, params, {
      notify: false
    });
    delay = 0;
    return angular.forEach(data, function(val) {
      val.delay = delay;
      vm.posts.push(val);
      return delay += 0.1;
    });
  };
  vm.loadData = function() {
    if (!vm.paging.loaded && !vm.loading) {
      vm.paging.page++;
      return vm.getPosts();
    }
  };
  vm.init = function() {
    return vm.getPosts();
  };
  vm.init();
  return vm;
}]);
