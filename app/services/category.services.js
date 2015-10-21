angular.module("app").factory("Category", ["$http", "$q", "$rootScope", function($http, $q, $rootScope) {
  var getCategories;
  getCategories = function() {
    var delay;
    delay = $q.defer();
    $http.get($rootScope.WPAPI.api_url + '/taxonomies/category/terms').success(function(data) {
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
