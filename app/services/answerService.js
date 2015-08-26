  angular
    .module('improvedAngularStackoveflow')
    .factory('answerService', answerService);


function answerService($http, $q) {
 
  return { 
    getAnswers: function(question_id) {
      var deferred = $q.defer();
      var url = 'https://api.stackexchange.com/2.2/questions/' + question_id + '/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody&jsonp=JSON_CALLBACK';
     $http.jsonp(url)
        .success(function(data, status, headers, config) {
          deferred.resolve(data);
        })
        .error(function(data) {
          deferred.reject(data);
        })
      return deferred.promise;
    }
  }

 
}