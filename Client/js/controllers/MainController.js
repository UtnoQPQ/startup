app.controller('MainController', ['$scope', 'movies', function($scope, forecast) {
  movies.success(function(data) {
    $scope.allMovies = data;
  });
}]);