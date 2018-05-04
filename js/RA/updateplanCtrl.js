resourceApp.controller('updateplanCtrl',["$scope","$state","$stateParams","$filter","RAService",function($scope, $state, $stateParams, $filter,RAService) {
							$scope.$on('$viewContentLoaded', function() {
								$scope.plan = {};
							
								$scope.getplanById();
							})
							
							
							$scope.getplanById = function() {
								RAService.plangetById($stateParams.planId).then(function(data) {
													$scope.plan = data;
													console.log($scope.plan);
													
											},
												function(err) {
													if (err) {
														$scope.errorMessage = err;
													}
												})
							}

							$scope.updateplan = function() {
								debugger;

								RAService.planupdate($scope.plan).then(function(data) {
											$scope.planupdatedetails = data;
											console.log($scope.planupdatedetails);
											$state.go('RA.plan');
										}, function(err) {
											if (err) {
												$scope.errorMessage = err;
											}
										})
							}

						} ]);