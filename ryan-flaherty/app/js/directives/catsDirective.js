'use strict';

module.exports = function(app) {

  app.directive('catsDir', function() {
    return {
      restrict: 'A',
      replace: true,
      templateUrl: '/html/cats.html',
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

