angular.module("app")
.controller('AlpMoviesController', ['$scope', 'movies', function($scope, movies) {
	movies.get('/moviesSelectionAlphabetical')
   .success(function(data) {
    $scope.movies = data;
    console.log(data);
   });
}]);




