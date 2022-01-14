(function(){

	"use strict";

	var aboutModule = angular.module("aboutModule", []);

	aboutModule.controller("AboutController", function($scope, $http){

		$http({
			method: 'GET',
			url: 'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ096sZJxMHRUROKs1iZd1Xps&key=AIzaSyBKs2JPf2BmSP9RkZyBlvGtwWU1UjV5IGI'})
			
			.then(function successCallback(response) {

		    	$scope.reviews = response.data.result.reviews;
		  	});


	});

})();