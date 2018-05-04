
resourceApp.controller('requirementsearachCtrl',['$scope','RAService','$state',function($scope,RAService,$state){
	  var skills = localStorage.getItem('skills');
	  var jobCategory = localStorage.getItem('jobCategory');
	  var currentLocation = localStorage.getItem('currentLocation');
	  var totalExperience = localStorage.getItem('totalExperience');
	  debugger;
	 	RAService.searchrequirement(skills,jobCategory,currentLocation,totalExperience).then(function(data){
	 		$scope.requirement = data;
	 		console.log($scope.requirement)	
	 	})	 
}]);

