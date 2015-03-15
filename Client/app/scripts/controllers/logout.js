'use strict';

angular.module('angularToken')
  .controller('LogoutCtrl', function (authToken, $state) {
    authToken.removeToken();
    $state.go('main');
  });
