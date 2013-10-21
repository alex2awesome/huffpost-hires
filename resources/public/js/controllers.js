//dummy tasks
var task1 = {}

//dummy applicants
var app1 = {'id':0, 'name':'Alex Berke', 'goalie':'Adam', 'email':'aaaaaaaaaaaaaaa@b.com', 'phonenumber': '111-222-3333', 'role':'Developer', 'asof':'Datetime','tasks':[]};
var app2 = {'id':1, 'name':'Mila Kunis', 'goalie':'Adam', 'email':'aaaaaaaaaaaaaaa@b.com', 'phonenumber': '111-222-3333', 'role':'Designer', 'asof':'Datetime', 'tasks':[]};
var app3 = {'id':2, 'name':'Angelina Jolie', 'goalie':'Adam', 'email':'aaaaaaaaaaaaaaa@b.com', 'phonenumber': '111-222-3333', 'role':'Scala Engineer','asof':'Datetime','tasks':[]};

var interviewer1 = {'name':'Brandon Diamond','phone':'111-222-3333','email':'bbbbbbbbb@c.co'};
var interviewer2 = {'name':'Adam lastname','phone':'111-222-3333','email':'bbbbbbbbb@c.co'};
var interviewer3 = {'name':'Sam lastname','phone':'111-222-3333','email':'bbbbbbbbb@c.co'};


function MainCntl($scope, $location) {
	$scope.domain = window.location.origin;

	$scope.interviewers = [interviewer1,interviewer2,interviewer3];
	$scope.applicants = [app1,app2,app3];


	$scope.addNew = false;

	$scope.addNewPressed = function(){
		if ($scope.addNew) {
			$scope.addNew = false;
			$('#add-applicant-button').text('+');
		} else {
			$scope.addNew = true;
			$('#add-applicant-button').text('-');
		}
	}


	var init = function() {

		$('.popover-hover').popover({trigger: 'hover'});	
	}
	init();
}

function ApplicantsCntl($scope, $location) {

	/* TODO: SEND IN RESOLVE */
	$scope.applicant = app1;

	$scope.editApplicantInfo = false;
	$scope.updateApplicantInfo = function(){
		if (!$scope.editApplicantInfo) {
			$scope.editApplicantInfo = true;
			$('#updateApplicantInfo-btn-left').text('Save');
		}
	}



	var init = function() {
		console.log($scope.applicants);
	}
	init();
}

function InterviewersCntl($scope, $location) {


	var init = function() {

	}
	init();
}