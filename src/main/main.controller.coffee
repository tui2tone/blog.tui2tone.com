angular.module "app"
  .controller "MainController", (Post,Category,$rootScope)->
    # Web Title
    $rootScope.WP_SETTING.SITE_TITLE = $rootScope.WP_SETTING.TITLE + " : " + $rootScope.WP_SETTING.DESCRIPTION
    $rootScope.WP_SETTING.SITE_THUMBNAIL = ""

    # Main Module
    vm = this

    # Variable
    vm.selected_category = "All"
    vm.categories = []
    vm.loading = false

    # Get Categories
    vm.getCategories = ->
      Category.getCategories().then (data) ->
        vm.categories = data

    # Initial Data
    vm.init = ->
      vm.getCategories()

    vm.init()

    return vm
