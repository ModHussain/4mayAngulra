resourceApp.controller('customerresourceserchCtrl',['$scope','RAService','$state',function($scope,RAService,$state){
	 debugger;

	  var skills =   localStorage.getItem('skills1', skills);
	  var jobCategory = 	localStorage.getItem('jobCategory1', jobCategory);
	  var jobLocation = 	localStorage.getItem('jobLocation1', jobLocation);
	  var experience = 	localStorage.getItem('experience1', experience);
	 	RAService.searchresource(skills,jobCategory,jobLocation,experience).then(function(response){
	 		$scope.resourcelist = response;
	 		console.log($scope.resourcelist)	
	 	})	 
}]);
