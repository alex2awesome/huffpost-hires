
function MainCntl($scope, $location, UIService, APIService) {
	$scope.domain = window.location.origin;

	$scope.interviewersMap; //= {0:interviewer1,1:interviewer2,2:interviewer3};
	$scope.interviewersList; //= [interviewer1, interviewer2, interviewer3]; where is this populated?
	
	$scope.applicantsList;
	$scope.applicantsMap; 
	$scope.applicant;

	$scope.tasksMap;
	$scope.tasksList;

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
function HomeCntl($scope){

	var init = function() {
	}
	init();
}
function AllApplicantsCntl($scope, $location, APIService) {



	$scope.addApplicant = function(new_applicant) {
		console.log('new_applicant:');
		console.log(new_applicant);

		new_applicant.goalie = new_applicant.goalie.id;
		/* TODO -- POST TO SERVER */
		$scope.applicants[new_applicant.id] = new_applicant;
		$scope.new_applicant = null;
		$scope.hideAddNew();
	}



	var init = function() {
		APIService.getInterviewers(function() {
			console.log('Interviewers List:');
			console.log($scope.interviewersList);
			console.log('interviewersMap');
			console.log($scope.interviewersMap);
		});
		APIService.getApplicants(function() {
			console.log('applicantsList');
			console.log($scope.applicantsList);
			console.log('applicantsMap');
			console.log($scope.applicantsMap);
		});
	}
	init();
}
function ApplicantCntl($scope, $routeParams, APIService) {

	$scope.editApplicantInfo = false;

	$scope.completeTasks;
	$scope.incompleTasks;

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
		APIService.getApplicant($routeParams.id, function() {
			console.log('applicant:');
			console.log($scope.applicant);
		});
		APIService.getInterviewers(function() {
			console.log('Interviewers List:');
			console.log($scope.interviewersList);
			console.log('interviewersMap');
			console.log($scope.interviewersMap);
		});
	}
	init();
}

function AllInterviewersCntl($scope, UIService, APIService) {
	/* ALEX SPANGER EDITS HERE */

}

<<<<<<< HEAD
function InterviewersCntl($scope, $location) {
=======
function InterviewerCntl($scope, $location) {
	/* ALEX SPANGER EDITS HERE */
>>>>>>> 7c4c6fdf97fa0313e7d112c669a645894402a4c3

	var init = function() {

	}
	init();
}