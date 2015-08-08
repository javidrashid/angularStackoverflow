'use strict'
improvedAngularStackoveflow.controller('answerCtrl', function($scope, answerService) {
  $scope.getAnswers = function(question_id, data) {
    answerService.getAnswers(question_id)
      .then(function(data) {
        $scope.answerdata = data;
        $scope.answerlength = data.items.length;
      })
  }
});





improvedAngularStackoveflow.controller('questionCtrl', function($scope, questionService, $http) {
  $scope.loading = true; 
  $scope.getQuestions = function(tag_name) {
      questionService.getQuestions(tag_name).then(function(data){
        $scope.data = data;
      })
  }
  $scope.getQuestions('angular');
  $scope.page1 = 1;
	$scope.totalQuestions = [];
	$scope.loadMoreQuestions = function() { console.log('load more questions');
		$scope.loading = true; 
		var url = 'https://api.stackexchange.com/2.2/search?site=stackoverflow&page=' + $scope.page1 + 
		'&pagesize=20&order=desc&sort=activity&tagged=angular';
		$http.get(url)
			.success(function(data, status, config, headers) {
				for (var i = 0; i < data.items.length; i++) {
					$scope.totalQuestions.push(data.items[i]);
				}
				$scope.page1 += 1;
				$scope.loading = false;
				console.log(url);
			})
			.error(function(data, status, config, headers) {
				alert('I think StackExchange API is returning some error something with error code ' + status);
			})
	}
	$scope.loadMoreQuestions();
 });
//http://api.stackexchange.com/2.2/questions?site=stackoverflow&page=1&pagesize=20&order=desc&sort=activity&tagged=java






stackOverflow.controller('simpleCtrl', ['tagService', function simpleCtrl($scope, tagService) {
    tagService.getTags(function(data) {
    $scope.data = data;
  });
}]);



improvedAngularStackoveflow.controller('tagCtrl', function($scope, $http, tagService, appSettings) {
	$scope.appSettings = appSettings;
	tagService.getTags(function(tag_data) {
		$scope.tag_data = tag_data;
	});
	
	$scope.page = 1;
	$scope.totalTags = [];
	$scope.loadMoreTags = function() {
		$scope.loading = true;
		var url = 'http://api.stackexchange.com/2.2/tags?site=stackoverflow&pagesize=70&page=' + $scope.page;
		$http.get(url)
			.success(function(data, status, config, headers) {

				for (var i = 0; i < data.items.length; i++) {
					$scope.totalTags.push(data.items[i]);
				}
				$scope.page += 1;
				$scope.loading = false;
			})
			.error(function(data, status, config, headers) {
				alert('I think StackExchange API is returning some error something with error code ' + status);
			})
	}
	$scope.loadMoreTags();
});