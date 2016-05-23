var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "HomeController",
      templateUrl: "views/movieViewsHome.html"
    })
    .when('/movies/:id', {
      controller: 'MoviesController',
      templateUrl: 'views/singleMovie.html'
    })
    .when('/moviesSelectionAlphabetical', {
      controller: 'AlpMoviesController',
      templateUrl: 'views/selectorMovies.html'
    })
    .when('/moviesSelection', {
      controller: 'SelectorController',
      templateUrl: 'views/selectorMovies.html'
    })
    .when('/popularMovies', {
      controller: 'PopMoviesController',
      templateUrl: 'views/selectorMovies.html'
    })
    .when('/recentMovies', {
      controller: 'RecMoviesController',
      templateUrl: 'views/selectorMovies.html'
    })           
    .otherwise({
      redirectTo: '/'
    });
});
