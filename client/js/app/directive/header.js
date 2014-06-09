/* global angular */
angular.module('antherion').directive('header',
  function () {
    'use strict';
    return {
      templateUrl: 'tmpl/header.html',
      controller: 'headerCtrl'
    };
  }
);
