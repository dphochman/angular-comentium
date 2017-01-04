'use strict';

/* Directives */
var commentiumDirectives = angular.module('commentiumDirectives', []);

commentiumDirectives.directive('commentiumItem', function() {
    return {
        templateUrl: 'partials/comment-item.html'
    };
});

commentiumDirectives.directive('commentiumCloud', function() {
    return {
        templateUrl: 'partials/comment-tagcloud.html'
    };
});

commentiumDirectives.directive('commentiumEdit', function() {
    return {
        templateUrl: 'partials/comment-form.html'
    };
});
