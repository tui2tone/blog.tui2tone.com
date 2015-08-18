angular.module "app"
  .factory "Post", ($http,$q,$rootScope) ->
    getPosts = (params) ->
      delay = $q.defer()
      get_param_s = []
      angular.forEach params, (val,key) ->
        if key == "page"
          get_param_s.push(key + "=" + val)
        else
          get_param_s.push("filter[" + key + "]=" + val)
          
      $http.get('/wp-json/posts?' + get_param_s.join("&"))
        .success (data) ->
          delay.resolve(data)
        .error () ->
          delay.reject 'Cannot load posts'
      return delay.promise

    getPost = (id) ->
      delay = $q.defer()
      $http.get('/wp-json/posts/' + id, {
        headers: { 'X-WP-Nonce': $rootScope.api_nonce}
        })
        .success (data) ->
          delay.resolve(data)
        .error () ->
          delay.reject 'Cannot load posts'
      return delay.promise

    return {
      getPosts: getPosts
      getPost: getPost
    }
