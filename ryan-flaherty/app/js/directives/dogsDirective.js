'use strict';

module.exports = function(app) {

  app.directive('dogsDir', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/html/dogs.html',
      scope: {
        dogAtr: '='
      },
      transclude: true
    };
  });

};

