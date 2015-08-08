improvedAngularStackoveflow.controller('simpleCtrl', ['tagService', function simpleCtrl($scope, tagService) {
    tagService.getTags(function(data) {
    $scope.data = data;
  });
}]);
