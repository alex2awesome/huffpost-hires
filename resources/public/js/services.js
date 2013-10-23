HiresApp.factory('UIService', function($rootScope) {

  return {
  }
});

HiresApp.factory('APIService', function($rootScope, $http, $q){

  return {

    listToMap: function(list) {
      var map = {};
      $.each(list, function(i) { map[list[i].id] = list[i]; });
      return map;
    },

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
    },
    getInterviewers: function(callback) {
      this.httpGET('/interviewer/all').then(function(returnedData) {
        $rootScope.interviewersList = returnedData;
        if (callback) callback();
      });
    },
    getApplicants: function(callback) {
      this.httpGET('/applicant/all').then(function(returnedData) {
        $rootScope.applicantsList = returnedData;
        if(callback) callback();
      });
    },


  }
});