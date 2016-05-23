angular.module("app")
.controller('HomeController', ['$scope', 'movies', function($scope, movies) {
	movies.get('/moviesIndex')
   .success(function(data) {
    $scope.movies = data;
    console.log(data);
   });
}]);

