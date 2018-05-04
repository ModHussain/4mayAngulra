resourceApp.controller('customerrequirementsearachCtrl',['$scope','RAService','$state',function($scope,RAService,$state){
	var registrationId = localStorage.getItem('registrationId');
	  var skills = localStorage.getItem('skills');
	  var jobCategory = localStorage.getItem('jobCategory');
	  var jobLocation = localStorage.getItem('jobLocation');
	  var totalExperience = localStorage.getItem('totalExperience');
	  debugger;
	 	RAService.searchrequirementbyid(registrationId,skills,jobCategory,jobLocation,totalExperience).then(function(data){
	 		$scope.requirement = data;
	 		console.log($scope.requirement)	
	 	})	 
}]);