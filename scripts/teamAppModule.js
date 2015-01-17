var teamApp = angular.module('myTeamApp', [])
  .controller('teamCtrl', ['$scope', function($scope) {
    $scope.pageTitle = "Team Generator";
  }]);