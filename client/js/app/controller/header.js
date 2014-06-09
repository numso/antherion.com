/* global angular */
angular.module('antherion').controller('headerCtrl',
  function ($scope, $state, nav) {
    'use strict';
    $scope.nav = nav;

    $scope.goTo = function (item) {
      $state.transitionTo(item.state);
    };
  }
);
