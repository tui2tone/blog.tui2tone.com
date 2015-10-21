angular.module "app"
  .run ($rootScope, $state, $stateParams, $location, $window) ->
    $rootScope.$state = $state
    $rootScope.$stateParams = $stateParams
    $rootScope.config = angular.copy($config)
    $rootScope.WPAPI = WPAPI
    $rootScope.api_nonce = WPAPI.api_nonce
    $rootScope.WP_SETTING = WP_SETTING || {}

    $rootScope.$on '$stateChangeSuccess', (event) ->
      if !$window.ga
        return
      $window.ga 'send', 'pageview', page: $location.path()
      return

    return
