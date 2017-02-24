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

			console.log(vm.result);

			function getUser(event, objParam) {
				if (event.keyCode === 13){
						console.log(event);
					homeServiceApi.getUser(objParam)
						.then(function (result) {
							if (result.data) {
								vm.result = result.data;
							}else{
								toaster.pop('error','Usuário não encontrado');
							}
						});
				}
			}

		}
})();