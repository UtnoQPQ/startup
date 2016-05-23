angular.module("app")
.controller('PopMoviesController', ['$scope', 'movies', function($scope, movies) {
	movies.get('/popularMovies')
   .success(function(data) {
    $scope.movies = data;
    console.log(data);
   });
}]);