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
