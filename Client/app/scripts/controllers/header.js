'use strict';

angular.module('angularToken')
  .controller('HeaderCtrl', function ($scope, authToken) {
    $scope.isAuthenticated = authToken.isAuthenticated;
  });
