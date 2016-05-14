/* global angular, _ */
angular.module('antherion').controller('appCtrl',
  function ($scope, $stateParams, apps) {
    'use strict';
    var key = $stateParams.key;
    $scope.app = _.findWhere(apps, { key: key });
    $scope.five = _.range(1, $scope.app.numScreens + 1);
  }
);
