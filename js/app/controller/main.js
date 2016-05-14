/* global angular, _ */
angular.module('antherion').controller('mainCtrl',
  function ($scope, $state, apps) {
    'use strict';

    var sort = ['iPhone Games', 'iPad Games', 'iPhone Books'];
    var groups = _.groupBy(apps, 'group');

    $scope.groups = _.map(sort, function (key) {
      return {
        title: key,
        apps: groups[key]
      };
    });

    $scope.goTo = function (key) {
      $state.transitionTo('app', {
        key: key
      });
    };
  }
);
