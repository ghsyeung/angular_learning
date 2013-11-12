'use strict';

angular.module('perkedProtoAppApp')
  .controller('GratitudesctrlCtrl', function ($scope) {
    $scope.gratitudes = [
      { message: "I am grateful that my wife is with me in Seattle" },
      { message: "I am grateful that I am able to finish my work" },
      { message: "I am grateful that I am working on the application" },
    ];
  });
