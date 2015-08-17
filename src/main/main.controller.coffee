angular.module "app"
  .controller "MainController", (Post,Category)->
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
