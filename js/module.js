/* global angular, _, nav */
angular.module('antherion', ['ui.router']).config(
  function ($stateProvider, $urlRouterProvider) {
    'use strict';

    _.each(nav, function (item) {
      $stateProvider.state(item.state, {
        templateUrl: item.tmpl,
        controller: item.ctrl,
        url: item.url
      });
    });

    $stateProvider.state('app', {
      templateUrl: 'tmpl/app.html',
      controller: 'appCtrl',
      url: '/app/:key'
    });

    $urlRouterProvider.otherwise('/');
  }
);
