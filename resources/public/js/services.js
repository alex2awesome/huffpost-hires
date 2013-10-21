HiresApp.factory('UIService', function($rootScope) {

  return {
  }
});

HiresApp.factory('APIService', function($rootScope, $http, $q){

  return {

    http: function(method, url, data) {
      var deferred = $q.defer();
      $http({
        method: method,
        url: '/api' + url,
        data: (data || {}),
      })
      .success(function(returnedData){
        deferred.resolve(returnedData);
      })
      .error(function(returnedData) {
        console.log('API ERROR: ' + returnedData.error);
        deferred.reject(returnedData);
      });
      return deferred.promise;
    },

    httpGET: function(url) {
      return this.http('GET', url, null);
    },
    httpPOST: function(url, data) {
      return this.http('POST', url, data);
    },
    httpPUT: function(url, data) {
      return this.http('PUT', url, data);
    },
    httpDELETE: function(url, data) {
      return this.http('DELETE', url, data);
    },

    getTasksByApplicant: function(applicantID) {
      console.log($rootScope.tasksList);
      return $rootScope.tasksList;
    }


  }
});