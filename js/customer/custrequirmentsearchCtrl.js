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
	 	$scope.skills=["java","jsp","servlets","Spring","Html","Css","Bootstrap","Angularjs","Nodejs","Php","Phyton","MySQL","MongoDB","Oracle","Sql Server"];

	 	$scope.skillfunc= function(){
	 		RAService.getskills().then(function(data){
	 	        $scope.skills = data;
	 	       
	 	    });
	 		}
	 		$scope.companyfunc= function(){
	 			RAService.getcompany().then(function(data){
	 		        $scope.company = data;
	 		       
	 		    });
	 			}
	 		$scope.budgetfunc= function(){
	 			RAService.getbudget().then(function(data){
	 		        $scope.budget = data;
	 		       
	 		    });
	 			}
	 		$scope.experiencefunc=function(){
	 		RAService.getexperience().then(function(data){
	 		$scope.experience =data;
	 		console.log($scope.experience)
	 		})
	 		}
	 		$scope.locationfunc = function(){
	 		RAService.getlocation().then(function(data){
	 			$scope.location = data;
	 		})
	 		}
	 		$scope.jobcategoryfunc = function(){
	 		RAService.getjobCategory().then(function(data){
	 			$scope.Jobc = data;
	 		})
	 		}
}]);