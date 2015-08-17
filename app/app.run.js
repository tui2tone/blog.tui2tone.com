angular.module("app").run(["$rootScope", "$state", "$stateParams", function($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.config = angular.copy($config);
  $rootScope.api_nonce = WPAPI.api_nonce;
}]);
