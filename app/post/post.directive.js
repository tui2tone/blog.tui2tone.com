angular.module("app").directive('ngHighLight', function() {
  return {
    restrict: 'C',
    link: function(scope, elm, attrs) {
      if (elm[0].textContent.trim() === "") {
        return elm.remove();
      } else {
        return hljs.highlightBlock(elm[0]);
      }
    }
  };
});

angular.module("app").directive('compile', [
  '$compile', function($compile) {
    return function(scope, element, attrs) {
      scope.$watch((function(scope) {
        return scope.$eval(attrs.compile);
      }), function(value) {
        element.html(value);
        $compile(element.contents())(scope);
      });
    };
  }
]);

angular.module("app").filter('capitalize', function() {
  return function(input) {
    return input;
  };
});
