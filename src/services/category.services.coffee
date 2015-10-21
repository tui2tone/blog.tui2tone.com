angular.module "app"
  .factory "Category", ($http,$q,$rootScope) ->
    getCategories = ->
      delay = $q.defer()
      $http.get($rootScope.WPAPI.api_url + '/taxonomies/category/terms')
        .success (data) ->
          delay.resolve(data)
        .error () ->
          delay.reject 'Cannot load categories'
      return delay.promise

    return {
      getCategories: getCategories
    }
