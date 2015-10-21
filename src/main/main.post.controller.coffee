angular.module "app"
  .controller "MainPostController", (Post,Category,$state,$stateParams)->
    vm = this

    # Variable
    vm.selected_category = $stateParams.category || "All"
    vm.paging =
      page: $stateParams.page || 1
      loaded: false
    vm.posts = []
    vm.loading = false

    # Get Posts
    vm.getPosts = ->
      vm.loading = true
      params = {}
      params.order = "DESC"
      params.orderby = "date"
      params.posts_per_page = 10
      if vm.selected_category != "All"
        params.category_name = vm.selected_category
      params.page = vm.paging.page
      Post.getPosts(params).then (data) ->
        vm.loadingData(data)
        vm.loading = false

    vm.loadingData = (data) ->
      if data.length == 0
        vm.paging.loaded = true
        vm.paging.page--
      params = {}
      if vm.selected_category != "All"
        params.category = vm.selected_category
      if vm.paging.page > 1
        params.page = vm.paging.page
      $state.go($state.current, params, notify: false);
      delay = 0
      angular.forEach data, (val) ->
        val.delay = delay
        vm.posts.push val
        delay += 0.1

    vm.loadData = ->
      if !vm.paging.loaded && !vm.loading
        vm.paging.page++
        vm.getPosts()

    # Initial Data
    vm.init = ->
      vm.getPosts()

    vm.init()

    return vm
