angular.module("app").directive('loadingBar', ["$http", function($http) {
  return {
    restrict: 'A',
    link: function(scope, elm, attrs) {
      scope.isLoading = function() {
        return $http.pendingRequests.length > 0;
      };
      scope.$watch(scope.isLoading, function(v) {
        if (v) {
          elm.show();
        } else {
          elm.hide();
        }
      });
    }
  };
}]).directive('titleTag', ["$rootScope", function($rootScope) {
  return {
    restrict: 'A',
    link: function(scope, elm, attrs) {
      return scope.$watch(function() {
        return $rootScope.WP_SETTING.SITE_TITLE;
      }, function(val) {
        if (!angular.isUndefined(val)) {
          return elm.html(val);
        }
      });
    }
  };
}]);
