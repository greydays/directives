'use strict';

module.exports = function(app) {

  app.directive('catsDir', function() {
    return {
      restrict: 'A',
      replace: true,
      templateUrl: '/html/cats.html',
      scope: {
        miceCaught: '='
        },
      transclude: true,
      controller: function($scope) {
        $scope.miceCatch = function() {
          $scope.miceCaught += 1;
        };
      }
    };
  });

};
