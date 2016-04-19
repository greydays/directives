'use strict';

module.exports = function(app) {

  app.directive('footer', function() {
    return {
      restrict: 'A',
      replace: true,
      template: '<footer><h1>LOOK AT ME</h1><h2>I\'m a directive too!</h2></footer>',
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

