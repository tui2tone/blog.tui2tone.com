angular.module("app").factory("Post", ["$http", "$q", "$rootScope", function($http, $q, $rootScope) {
  var getPost, getPosts;
  getPosts = function(params) {
    var delay, get_param_s;
    params.posts_per_page = 10;
    delay = $q.defer();
    get_param_s = [];
    angular.forEach(params, function(val, key) {
      if (key === "page") {
        get_param_s.push(key + "=" + val);
      } else {

      }
      return get_param_s.push("filter[" + key + "]=" + val);
    });
    $http.get('/wp-json/posts?' + get_param_s.join("&")).success(function(data) {
      return delay.resolve(data);
    }).error(function() {
      return delay.reject('Cannot load posts');
    });
    return delay.promise;
  };
  getPost = function(id) {
    var delay;
    delay = $q.defer();
    $http.get('/wp-json/posts/' + id, {
      headers: {
        'X-WP-Nonce': $rootScope.api_nonce
      }
    }).success(function(data) {
      return delay.resolve(data);
    }).error(function() {
      return delay.reject('Cannot load posts');
    });
    return delay.promise;
  };
  return {
    getPosts: getPosts,
    getPost: getPost
  };
}]);
