'use strict';

var controllers = angular.module('commentiumControllers', 
  ['ngSanitize', 'commentiumFilters', 'commentiumServices']);

/* Controllers */
controllers.controller('CommentListCtrl', ['$scope', '$http', 'commentiumTags',
  function($scope, $http, tagsProvider) {

    $scope.load = function (url) {
      $http.get(url).success(function(data) {
        $scope.commentList = data;
        $scope.loaded = {when: new Date(), what: url};
        $scope.touch();
      });
    };

    $scope.touch = function () {
      var data = $scope.commentList,
        tags = {};
      $scope.commentListCount = data.length;
      tags = tagsProvider.load(data);
      tags = tagsProvider.rank(tags);
      $scope.tags = tags;
      $scope.tagList = Object.keys(tags).sort();
      $scope.touched = {when: new Date()};
      return true;
    };
    $scope.load('resources/comments.json');

    $scope.clear = function(){$scope.load('resources/comments-clear.json');};

    $scope.getComment = function(id) {
      var comment = {};
      if (typeof id === "number" || typeof id === "string") {
        comment = $scope.commentList.find(function(item) {
          return item.id == id; // Keep this loose to allow strings and numbers to match
        });
      }
      return comment || {};
    };

    $scope.editComment = function(comment) {
      comment.editing = true;
      comment.working = {
        id: comment.id,
        title: comment.title,
        text: comment.text,
        tags: comment.tags
      };
      return true;
    };
    $scope.cancel = function(comment) {
      comment.editing = false;
    };

    $scope.saveComment = function(newComment) {
      var id = newComment.id,
        index = -1,
        comment = {},
        oldComment = {};
      
      // If a matching id is found, save it in place.
      index = $scope.commentList.findIndex(function(item) {
        return item.id == id;
      });
      if (index > -1) {
        oldComment = $scope.commentList[index];
      } else {
        index = $scope.commentList.length; // Append
        if (typeof newComment.id === "undefined") {
          newComment.id = (new Date()).getTime();
        }
      }
      $scope.audit(newComment, oldComment);

      // Limit the update to specific fields.
      comment = angular.copy(oldComment);
      comment.id = newComment.id;
      comment.title = newComment.title;
      comment.text = newComment.text;
      comment.tags = newComment.tags;

      $scope.commentList[index] = comment;
      $scope.touch();

      oldComment.editing = false;

      return true;
    };

    $scope.audit = function(newItem, oldItem) {
      // TODO log changes for humans.
      return true;
    };

    $scope.validateComment = function(comment) {
      // TODO validate embedded HTML and tags.
      return true;
    };

    $scope.tagClick = function(tag) {
      $scope.tagSearch = ($scope.tagSearch === tag.name) ? '' : tag.name;
    };

  }
]);

controllers.controller('CommentDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    var id = $routeParams.id,
        data = $scope.commentList.find(function(item) {return item.id === id;});
    
    $scope.commentId = id;
    $scope.commentDetail = data || {};
  }
]);

controllers.controller('CommentEditCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    var CommentListCtrl = $scope.$parent;

    $scope.saveComment = function (item) {
      CommentListCtrl.saveComment(item);
    };

    $scope.addTagToComment = function(name) {
      name = name.replace(/\s/g, '');
      if (name !== '') {
        if ($scope.comment.working.tags.indexOf(name) === -1) {
          $scope.comment.working.tags.push(name);
        }
      }

      $scope.newTag = ''; // Clear it
      return true;
    };

    $scope.existingTags = angular.copy(CommentListCtrl.tagList);
  }
]);
