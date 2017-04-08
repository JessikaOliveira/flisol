(function () {
	'use strict';

	angular
		.module('mk.controllers')
		.controller('homeCtrl', homeCtrl);
		
		homeCtrl.inject = ['homeServiceApi','config', 'toaster'];

		function homeCtrl(homeServiceApi, config, toaster) {
			var vm 			= this;
			vm.getUser 	= getUser;
			vm.result 	= {};

			function getUser(event,search) {				
				if (event.keyCode === 13){
					homeServiceApi.getUser(search)
						.then(function (result) {
							if (result) {								
								vm.result = result.data;
								console.log(vm.result);
							} else {
								
							}
						}).catch(function (e) {
							vm.error = 'Usuário não foi encontrado';
						});

				}
			}

		}
})();