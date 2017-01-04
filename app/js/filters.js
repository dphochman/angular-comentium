'use strict';

/* Filters */
var filters = angular.module('commentiumFilters', []);

/* hasTag : "query" */
filters.filter('hasTag', function() {
    return function(array, query) {
        var result = [],
            finder = function(tag) {return (tag === query);};
        // Contains
        if (angular.isArray(array) && query) {
            result = array.filter( function(item) {
                if (item.tags) {
                    return ( !!item.tags.find(finder) );
                }
                return false;
            });
            return result;
        }
        if (!angular.isArray(array)) {
            return result;
        }
        return array;
    };
});

filters.filter('count', function() {
    return function(array) {
        return (angular.isArray(array) ? array.length : 0);
    };
});

// TODO: Select union of multiple tags, e.g. hasTags : 'tag,tag'
// TODO: Select intersection of multiple tags, e.g. hasSomeTags : 'tag,tag'
// TODO: Select absence of a tag, e.g. notTag : 'query'
// TODO: Select partial tags being input, e.g. hasTagPartial : 'query'
// TODO: filter on any property
// TODO: filter with "and" operator
