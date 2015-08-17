angular.module("ng-scroll-reveal", []);

angular.module("ng-scroll-reveal").directive("ngSrContainer", function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      return console.log(2);
    }
  };
}).directive("ngSr", function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      return console.log(3);
    }
  };
});
