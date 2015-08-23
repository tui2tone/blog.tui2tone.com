angular.module "app"
  .directive 'ngHighLight', ->
      restrict: 'C'
      link: (scope, elm, attrs) ->
        hljs.highlightBlock(elm);

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
