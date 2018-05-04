resourceApp.controller('resourcecategoryCtrl',['$scope','RAService','$state',function($scope,RAService,$state){
	 var registrationId = localStorage.getItem('registrationId');
	  var skills = localStorage.getItem('skills');
	  var jobCategory = localStorage.getItem('jobCategory');
	  var jobLocation = localStorage.getItem('jobLocation');
	  var totalExperience = localStorage.getItem('totalExperience');
	 	RAService.searchresourcebyid(registrationId,skills,jobCategory,jobLocation,totalExperience).then(function(data){
	 		$scope.resourcejobcat = data;
	 		console.log($scope.resourcejobcat)	
	 	})	 
}]);
