resourceApp.controller('vendorreqlistCtrl',
		[
				'$scope',
				'RAService',
				'$state',
				function($scope, RAService, $state) {
					$scope.Selectors = [ "jobCategory", "experience",
							"jobLocation" ];
					$scope.SelectedCriteria = "";
					$scope.filterValue = "";

					$scope.$on('$viewContentLoaded', function() {
						$scope.postrequirement = {};
						$scope.postareq();
					})
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
					/*$scope.States = [ "Hyderabad", "Vijayawada", "Vizag",
							"Bangalore", "Chennai", "Madurai", "Kolkata",
							"Pune", "Mumbai", "Noida", "Delhi", "Jaipur",
							"Darjeeling", "Kerala" ];

					$scope.Jobc = [ "Application Developer",
							"Applications Engineer", "Database Administrator",
							"Front End Developer", "Java Developer",
							"Junior Software Engineer", "Network Engineer",

							"Senior Database Administrator",
							"Senior Programmer", "Senior Security Specialist",
							"Senior Web Developer", "Software Architect",
							"Systems Designer", "Software Developer",
							"Web Administrator", "Web Developer" ];
					$scope.skills = [ "java", "jsp", "servlets", "Spring",
							"Html", "Css", "Bootstrap", "Angularjs", "Nodejs",
							"Php", "Phyton", "MySQL", "MongoDB", "Oracle",
							"Sql Server" ];
					$scope.experience = [ "0-1 years", "1-2 years",
							"2-3 years", "3-4 years", "4-5 years", "5-6 years",
							"more" ];
					$scope.company = [ "TCS", "Tech M", "Oracle", "IBM",
							"Ojas", "HCL", "Wipro", "Info-tech", "CapGemini",
							"Persistant", "Virtusa", "Infosys" ]*/
						$scope.skills = [ "java", "jsp", "servlets", "Spring",
							"Html", "Css", "Bootstrap", "Angularjs", "Nodejs",
							"Php", "Phyton", "MySQL", "MongoDB", "Oracle",
							"Sql Server" ];

					$scope.postareq = function() {
						debugger;
						RAService.postareqList().then(function(data) {
							$scope.list = data;
							console.log($scope.list);
						}, function(err) {
							if (err) {
								$scope.errorMessage = err;
							}
						})
					}
					$scope.postFilter = function() {
						// debugger;
						var filter = {
							jobCategory : $scope.SelectedCriteria,
							consultant : $scope.filterValue
						};
						RAService.postReqfilter(filter).then(
								function(response) {
									$scope.list = response.data;
									console.log($scope.list);
								}, function(err) {
									if (err) {
										$scope.errorMessage = err;
									}
								})
					}

					$scope.resourcesearch = function(skills,jobCategory,jobLocation,totalExperience) {
						localStorage.setItem('skills', skills);
						localStorage.setItem('jobCategory', jobCategory);
						localStorage.setItem('jobLocation', jobLocation);
						localStorage.setItem('totalExperience', totalExperience);
						$state.go('vendor.resourcecategory');
					}

					$scope.requirement = function(postrequirement) {

						if (postrequirement.status == "Active") {
							postrequirement.status = "Inactive";
							RAService.requirementStatus(postrequirement).then(
									function(data) {
										$scope.aaaa = data;
										console.log($scope.aaaa);
									}, function(err) {
										if (err) {
											$scope.errorMessage = err;
										}
									})
						} else {
							postrequirement.status = "Active";
							RAService.requirementStatus(postrequirement).then(
									function(data) {
										$scope.aaaa = data;
										console.log($scope.aaaa);
									}, function(err) {
										if (err) {
											$scope.errorMessage = err;
										}
									})
						}
					}
				} ])
				
resourceApp.controller('vendorreqsummaryCtrl',["$scope","$rootScope","$state","$stateParams","RAService",function($scope,$rootScope,$state,$stateParams,RAService){
    $scope.$on('$viewContentLoaded', function () {
		$scope.postrequirement = {};
       
		 $scope.edit();
        })
		
   
	
		
        $scope.jobcategory = ["Java Developer","UI Developer","IDM Consultant","xgfhdfgh"];
	    $scope.jobtype = ["contract","full-time","part-time","szdf"];
	    $scope.jobRole = ["Fresher","Intern","Trainee","Junior Developer","Senior Developer","Project Lead"];
	    $scope.joblocation= ["Bangalore","Chennai","Hyderabad","Pune","Itanagar","Dispur","Patna","Raipur","Panaji","Gandhinagar","Punjab","Shimla","Srinagar","Ranchi",
        	"Thiruvananthapuram","Bhopal","Mumbai","Imphal","Shillong","Aizawl","Kohima","Bhubaneswar","Jaipur","Gangtok","Noida","Amaravathi","Agartala","Lucknow","Dehradun","Kolkata"];
        $scope.experience = ["1-2 years","2-3 years","3-5 years","5-7 years","7-10 years"];
		$scope.primaryskills = ["Java","JDBC","HTML5","CSS3","Javascript","AngularJS"];
		$scope.Rate=["Hourly","Per-Day","Per-Week","Per-Month",];
		$scope.skills=["java","jsp","servlets","Spring","Html","Css","Bootstrap","Angularjs","Nodejs","Php","Phyton","MySQL","MongoDB","Oracle","Sql Server"];
		$scope.secondaryskills = ["Oracle","MYSQL","SQL Server","MongoDB","WebRTC","Web Socket"];
        $scope.joining = ["Immediate","10-15 days","15-30 days","30-45 days","sf"];
       
        $scope.edit = function(){
        	RAService.postareqGetById($stateParams.postId).then(function(data){
					$scope.postrequirement = data;
					console.log($scope.postrequirement.primarySkills);
					console.log($scope.postrequirement);
					$scope.postrequirement.primarySkills = $scope.postrequirement.primarySkills.split(',');
					$scope.postrequirement.secondarySkills = $scope.postrequirement.secondarySkills.split(',');
					console.log($scope.postrequirement.primarySkills);
					console.log($scope.postrequirement.secondarySkills);
					}),
					function(err){
						if(err){
							$scope.errorMessage = err;
						}else{
							$scope.errorMessage = err;
					   }   
					}
}

  


}]);
