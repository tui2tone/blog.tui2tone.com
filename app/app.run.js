angular.module("app").run(["$rootScope", "$state", "$stateParams", "$location", "$window", function($rootScope, $state, $stateParams, $location, $window) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.config = angular.copy($config);
  $rootScope.api_nonce = WPAPI.api_nonce;
  $rootScope.WP_SETTING = WP_SETTING || {};
  $rootScope.$on('$stateChangeSuccess', function(event) {
    if (!$window.ga) {
      return;
    }
    $window.ga('send', 'pageview', {
      page: $location.path()
    });
  });
}]);
