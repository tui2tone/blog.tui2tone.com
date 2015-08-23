angular.module "app"
  .controller "PostController", (post,$document,$rootScope)->

    # Web Title
    $rootScope.WP_SETTING.SITE_TITLE = post.title + " " + post.excerpt +  " : " +  $rootScope.WP_SETTING.TITLE
    $rootScope.WP_SETTING.SITE_THUMBNAIL = post.featured_image.source
    post.content = post.content.replace(/class="ng-codemirror"/g, 'ui-codemirror="codeMirror.minOptions"');

    # Main Module
    vm = this
    vm.data = post

    vm.scrollTop = ->
      $document.scrollTopAnimated(0,500)

    vm.init = ->
      vm.scrollTop()

    vm.init()

    return vm
