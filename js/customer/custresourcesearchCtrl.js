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
