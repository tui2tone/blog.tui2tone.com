angular.module "app"
  .controller "PostController", (post,$document,$rootScope,$window,$http)->

    # Web Title
    $rootScope.WP_SETTING.SITE_TITLE = post.title + " " + post.excerpt +  " : " +  $rootScope.WP_SETTING.TITLE
    $rootScope.WP_SETTING.SITE_THUMBNAIL = post.featured_image

    # Main Module
    vm = this
    vm.data = post
    vm.current_url = $window.location.href;
    vm.shareCount =
      facebook: 0,
      twitter: 0

    console.log vm.data

    vm.scrollTop = ->
      $document.scrollTopAnimated(0,500)

    vm.init = ->
      vm.getShareCount()
      vm.scrollTop()

    vm.getShareCount = ->
      $http.get('https://api.facebook.com/method/links.getStats', { params: {urls: vm.current_url,  format: "json" }})
        .then (response) ->
          if response.data.length > 0
            vm.shareCount.facebook = response.data[0].share_count

    vm.init()

    return vm
