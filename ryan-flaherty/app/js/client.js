'use strict';

require('angular/angular');
require('angular-route');

var app = angular.module('app', ['ngRoute']); // eslint-disable-line


require('./directives/headerDirective')(app);
require('./directives/catsDirective')(app);
require('./directives/dogsDirective')(app);
require('./directives/footerDirective')(app);



/*app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/shows', {templateUrl: 'html/shows.html'})
    .when('/shows/:_id', {templateUrl: 'html/singleshow.html'})
    .when('/newband', {templateUrl: 'html/newband.html'})
    .when('/login', {templateUrl: 'html/login.html'})
    .when('/newshow', {templateUrl: 'html/newshow.html'})
    .when('/', {templateUrl: 'html/shows.html'})
    .otherwise({redirectTo: '/shows'});
}]);*/


