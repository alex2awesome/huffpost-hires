
// dummy interviewers
var interviewer1 = {'id':0, 'name':'Brandon Diamond','phone':'111-222-3333','email':'bbbbbbbbb@c.co'};
var interviewer2 = {'id':1, 'name':'Adam lastname','phone':'111-222-3333','email':'bbbbbbbbb@c.co'};
var interviewer3 = {'id':2, 'name':'Sam lastname','phone':'111-222-3333','email':'bbbbbbbbb@c.co'};

//dummy applicants
var app1 = {'id':0,'name':'Alex Berke', 'goalie':interviewer1.id, 'email':'aaaaaaaaaaaaaaa@b.com', 'phonenumber': '111-222-3333', 'role':'Developer', 'asof':'Datetime','tasks':[]};
var app2 = {'id':1,'name':'Mila Kunis', 'goalie':interviewer2.id, 'email':'aaaaaaaaaaaaaaa@b.com', 'phonenumber': '111-222-3333', 'role':'Designer', 'asof':'Datetime', 'tasks':[]};
var app3 = {'id':2,'name':'Angelina Jolie', 'goalie':interviewer3.id, 'email':'aaaaaaaaaaaaaaa@b.com', 'phonenumber': '111-222-3333', 'role':'Scala Engineer','asof':'Datetime','tasks':[]};

//dummy tasks
var task1 = {'id':0, 'title':'Resume Review', 'applicant':app1.id, 'interviewer':interviewer1.id,'feedback':'','completed':false,'pass-fail':true,'date':'datetime','feedback-due':'datetime'};
var task2 = {'id':1, 'title':'Resume Review', 'applicant':app1.id, 'interviewer':interviewer1.id,'feedback':'','completed':false,'pass-fail':true,'date':'datetime','feedback-due':'datetime'};
var task3 = {'id':2, 'title':'Resume Review', 'applicant':app1.id, 'interviewer':interviewer1.id,'feedback':'','completed':false,'pass-fail':true,'date':'datetime','feedback-due':'datetime'};

function MainCntl($scope, $location, UIService) {
	$scope.domain = window.location.origin;

	$scope.interviewersMap = {0:interviewer1,1:interviewer2,2:interviewer3};
	$scope.interviewersList = [interviewer1, interviewer2, interviewer3];
	$scope.applicants = {0: app1,1:app2,2:app3};

	$scope.tasksMap = {0:task1, 1: task2, 2: task3};
	$scope.tasksList = [task1, task2, task3];

	$scope.addNew = false;

	$scope.interviewerByName = function(name) {
		$.each($scope.interviewersList, function(){
			if ($(this).name === name) return $(this);
		});
	}

	$scope.showAddNew = function() {
		$scope.addNew = false;
		$('#add-applicant-button').text('+');
	}
	$scope.hideAddNew = function() {
		$scope.addNew = true;
		$('#add-applicant-button').text('-');
	}

	$scope.addNewPressed = function(){ $scope.addNew ? $scope.showAddNew() : $scope.hideAddNew(); }


	var init = function() {

		$('.popover-hover').popover({trigger: 'hover'});	
	}
	init();
}
function ApplicantCntl($scope, $routeParams, APIService) {
	/* TODO: SEND IN RESOLVE? */
	$scope.applicant = $scope.applicants[$routeParams.id];

	console.log($scope.tasksList);

	$scope.applicantTasks;

	$scope.editApplicantInfo = false;

	var updateApplicantInfoShow = function(){
		$scope.editApplicantInfo = true;
		$('#updateApplicantInfo-btn').html('<h3>Save</h3>');
	}
	var updateApplicantInfoSave = function() {
		/* TODO: PUT WITH APISERVICE */
		$scope.editApplicantInfo = false;
		$('#updateApplicantInfo-btn').html('<h3>Edit</h3>');
	}

	$scope.updateApplicantInfo = function(){
		$scope.editApplicantInfo ? updateApplicantInfoSave() : updateApplicantInfoShow();
	}	
	var init = function() {
		$scope.applicantTasks = APIService.getTasksByApplicant($scope.applicant.id);
	
		console.log($scope.applicantTasks);
	}
	init();
}
function AllApplicantsCntl($scope, $location) {



	$scope.addApplicant = function(new_applicant) {
		console.log('new_applicant:');
		console.log(new_applicant);

		new_applicant.goalie = new_applicant.goalie.id;
		/* TODO -- POST TO SERVER */
		new_applicant['id'] = $scope.applicants.length;
		$scope.applicants[new_applicant.id] = new_applicant;
		$scope.new_applicant = null;
		$scope.hideAddNew();
	}



	var init = function() {
		console.log($scope.applicants);
		console.log('interviewers:');
		console.log($scope.interviewersMap);
	}
	init();
}

function InterviewersCntl($scope, $location) {


	var init = function() {

	}
	init();
}