app.factory('movies', ['$http', function($http) { 
  return $http.get('http://127.0.0.1:8081/movies') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
