var HiresApp = angular.module('HiresApp', []);

HiresApp.config(function($routeProvider, $locationProvider) {	
	/* configure the routes */
	$routeProvider.when('/applicants', {
		templateUrl: 'partials/applicants.html',
		controller: ApplicantsCntl
	});
	$routeProvider.when('/interviewers', {
		templateUrl: 'partials/interviewers.html',
		controller: InterviewersCntl
	});
	$routeProvider.when('/', {
		templateUrl: 'partials/index.html',
	});
	$routeProvider.otherwise({
		templateUrl: 'partials/index.html',
	});
	$locationProvider.html5Mode(true);
});
