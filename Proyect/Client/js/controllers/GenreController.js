angular.module("app")
.controller('GenreController', ['$scope', 'genres', function($scope, genres) {
	genres.get('/Genres')
   .success(function(data) {
    $scope.genres = data;
    console.log(data);
   });
}]);

