angular.module("app")
.controller('SelectorController', ['$scope', 'movies', function($scope, movies) {
	movies.get('/movies')
   .success(function(data) {
    $scope.movies = data;
    console.log(data);
   });
}]);

