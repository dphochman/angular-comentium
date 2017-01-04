'use strict';

/* App Module */
var app = angular.module('commentium', 
    ['ngRoute', 'ngSanitize', 
    'commentiumControllers', 'commentiumFilters', 'commentiumServices', 'commentiumDirectives']);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $routeProvider.when('/comments', {
      controller: 'CommentListCtrl',
      templateUrl: 'partials/comment-list.html'
  });
  $routeProvider.when('/comment/:id', {
      controller: 'CommentDetailCtrl',
      templateUrl: 'partials/comment-detail.html'
  });
  $routeProvider.when('/comment-edit/:id', {
      controller: 'CommentEditCtrl',
      templateUrl: 'partials/comment-form.html'
  });

  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/comments'});
}]);
