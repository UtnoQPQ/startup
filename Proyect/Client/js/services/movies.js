angular.module("app")
.factory('movies', ['$http', function($http) {
    return {
        get: function(url) {
          return $http.get(url);
        }
   };
}]);
