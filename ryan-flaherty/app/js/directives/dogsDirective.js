'use strict';

module.exports = function(app) {

  app.directive('dogsDir', function() {
    return {
      restrict: 'A',
      replace: true,
      templateUrl: '/html/dogs.html',
      scope: {
        save: '&',
        buttonText: '=',
        labelText: '@',
        note: '='
      },
      transclude: true
    };
  });
};

