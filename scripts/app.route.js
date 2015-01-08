
(function() {
	'use strict';

	angular
		.module('webApp')
		.config(function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('404', {
					url: '/404',
					views: {
						content: {
							templateUrl: '/views/errors/404.html'
						}
					}
				})
				.state('home', {
					url: '/',
					views: {
						navbar: {
							templateUrl: '/views/partials/navbar.html'
						},
						content: {
							templateUrl: '/views/home.html'
						},
						footer: {
							templateUrl: '/views/partials/footer.html'
						}
					}
				});
		});
})();
