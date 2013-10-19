function MainCntl($scope, $location) {
	$scope.domain = window.location.origin;

	$scope.goTo = function(url) {
		window.location.href=url;
	}

	var init = function() {

		$('.popover-hover').popover({trigger: 'hover'});	
	}
	init();
}