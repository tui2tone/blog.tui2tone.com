angular.module "app"
  .factory "Category", ($http,$q) ->
    getCategories = ->
      delay = $q.defer()
      $http.get('/wp-json/taxonomies/category/terms')
        .success (data) ->
          delay.resolve(data)
        .error () ->
          delay.reject 'Cannot load categories'
      return delay.promise

    return {
      getCategories: getCategories
    }
