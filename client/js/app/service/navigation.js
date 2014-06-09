/* global angular */
var nav = [
  {
    label: 'Home',
    state: 'index',
    url: '/',
    tmpl: 'tmpl/main.html',
    ctrl: 'mainCtrl'
  },
  {
    label: 'Contact',
    state: 'contact',
    url: '/contact',
    tmpl: 'tmpl/contact.html'
  },
  {
    label: 'About',
    state: 'about',
    url: '/about',
    tmpl: 'tmpl/about.html'
  }
];

angular.module('antherion').factory('nav',
  function () {
    'use strict';
    return nav;
  }
);
