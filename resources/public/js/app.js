var HiresApp = angular.module('HiresApp', []);

HiresApp.config(function($routeProvider, $locationProvider) {	
	/* configure the routes */
	$routeProvider.when('/', {
		templateUrl: '/partials/index.html',
	});


	$routeProvider.when('/applicants', {
		templateUrl: 'partials/applicants-all.html',
		controller: ApplicantsCntl
	});
	$routeProvider.when('/applicant/:id', {
		templateUrl: 'partials/applicant.html',
		controller: ApplicantsCntl
	});


	$routeProvider.when('/interviewers', {
		templateUrl: 'partials/interviewers.html',
		controller: InterviewersCntl
	});


	$locationProvider.html5Mode(true);
});
