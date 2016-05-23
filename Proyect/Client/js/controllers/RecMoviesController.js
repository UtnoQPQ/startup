angular.module("app")
.controller('RecMoviesController', ['$scope', 'movies', function($scope, movies) {
	movies.get('/recentMovies')
   .success(function(data) {
    $scope.movies = data;
    console.log(data);
   });
}]);