angular.module "app"
  .directive 'loadingBar', ($http) ->
    restrict: 'A'
    link: (scope, elm, attrs) ->
      scope.isLoading = ->
        $http.pendingRequests.length > 0

      scope.$watch scope.isLoading, (v) ->
        if v
          elm.show()
        else
          elm.hide()
        return
      return
  .directive 'titleTag', ($rootScope) ->
    restrict: 'A'
    link: (scope, elm, attrs) ->
      scope.$watch ->
        $rootScope.WP_SETTING.SITE_TITLE
      , (val) ->
        if !angular.isUndefined(val)
          elm.html(val)
  .directive 'metaDescription', ($rootScope) ->
    restrict: 'A'
    link: (scope, elm, attrs) ->
      scope.$watch ->
        $rootScope.WP_SETTING.SITE_DESCRIPTION
      , (val) ->
        if !angular.isUndefined(val)
          elm.html(val)
