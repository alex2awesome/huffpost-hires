var HiresApp = angular.module('HiresApp', []);

HiresApp.config(function($routeProvider, $locationProvider) {	
	/* configure the routes */
	$routeProvider.when('/applicants', {
		templateUrl: 'html/applicants.html',
		controller: ApplicantsCntl
	});
	$routeProvider.when('/interviewers', {
		templateUrl: 'html/interviewers.html',
		controller: InterviewersCntl
	});
	$routeProvider.when('/', {
		templateUrl: 'html/index.html',
	});
	$routeProvider.otherwise({
		templateUrl: 'index.html',
	});
	$locationProvider.html5Mode(true);
});
