angular.module("app")
.controller('MoviesController', ['$scope', 'movies', '$routeParams', 
	function($scope, movies, $routeParams) {
    movies.get('/movies')    
    .success(function(data, detail) {
    $scope.detail = data[$routeParams.id];
    console.log(detail);
   });
}]);



