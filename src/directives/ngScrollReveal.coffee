angular.module "ng-scroll-reveal", []

angular.module "ng-scroll-reveal"
  .directive "ngSrContainer", ->
    restrict: 'A'
    link: (scope, element, attrs) ->
      console.log 2
  .directive "ngSr", ()->
    restrict: 'A'
    link: (scope, element, attrs) ->
      console.log 3
