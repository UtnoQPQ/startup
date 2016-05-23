angular.module("app")
.directive('movieInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'Client/js/directives/movieInfo.html' 
  }; 
});