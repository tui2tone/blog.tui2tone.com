angular.module "app"
  .directive 'ngCodemirror', ->
      restrict: 'C'
      link: (scope, elm, attrs) ->

angular.module "app"
  .directive 'compile', [
    '$compile'
    ($compile) ->
      (scope, element, attrs) ->
        scope.$watch ((scope) ->
          scope.$eval attrs.compile
        ), (value) ->
          element.html value
          $compile(element.contents()) scope
          return
        return
  ]
