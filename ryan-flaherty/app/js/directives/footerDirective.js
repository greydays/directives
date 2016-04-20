 'use strict';

module.exports = function(app) {

  app.directive('footDir', function() {
    return {
      restrict: 'E',
      replace: true,
      template: '<footer><h1>CLICK ME</h1><h2>I\'m a directive too!</h2></footer>',
      link: function($scope, element, attrs) {
        element.on('click', function() {
          element.css('color', 'red')
        });
      },
      transclude: true
    };
  });

};
