angular.module "app"
  .controller "PostController", (post,$document)->
    vm = this
    vm.data = post

    vm.scrollTop = ->
      $document.scrollTopAnimated(0,500)

    vm.init = ->
      vm.scrollTop()

    vm.init()

    return vm
