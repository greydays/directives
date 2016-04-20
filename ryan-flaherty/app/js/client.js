'use strict';

require('angular/angular');
require('angular-route');

var app = angular.module('app', ['ngRoute']); // eslint-disable-line


require('./directives/headerDirective')(app);
require('./directives/catsDirective')(app);
require('./directives/dogsDirective')(app);
require('./directives/footerDirective')(app);
require('./directives/clickedDir')(app);





