angular.module("app").factory("Category", ["$http", "$q", function($http, $q) {
  var getCategories;
  getCategories = function() {
    var delay;
    delay = $q.defer();
    $http.get('/wp-json/taxonomies/category/terms').success(function(data) {
      return delay.resolve(data);
    }).error(function() {
      return delay.reject('Cannot load categories');
    });
    return delay.promise;
  };
  return {
    getCategories: getCategories
  };
}]);
