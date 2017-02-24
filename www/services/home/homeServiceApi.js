(function () {
	'use strict';

	angular
		.module('mk.services')
		.factory('homeServiceApi', homeServiceApi);
		
		homeServiceApi.inject = ['$http','config'];

		function homeServiceApi($http ,config) {
			
			var _getUser = function (objParam) {
				console.log(config.apiUrl);
				return $http.get(config.apiUrl+'users/'+objParam)
					.then(function (result) {
						return result;
					});
			};

			return {
				getUser:_getUser
			};
		}
})();