angular.module "app"
  .directive 'ngHighLight', ->
      restrict: 'C'
      link: (scope, elm, attrs) ->
        if elm[0].textContent.trim() == ""
          elm.remove()
        else
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


angular.module "app"
  .filter 'capitalize' , ->
    return (input) ->
      return input
