var SonataApp = angular.module('SonataApp', ['ngRoute','ui.materialize']);
   


SonataApp.config(function($routeProvider) {
		$routeProvider
			.when('/user/profile', {
				templateUrl : 'js/views/settings/user_profile.html',
				controller  : 'MainController'
			})
			.when('/user/settings', {
				templateUrl : 'js/views/settings/user_settings.html',
				controller  : 'MainController'
			})
			.when('/catalogue/userServices', {
				templateUrl : 'js/views/catalogue/user_services.html',
				controller  : 'MainController'
			})
			.when('/catalogue/allServices', {
				templateUrl : 'js/views/catalogue/all_services.html',
				controller  : 'MainController'
			})
			.when('/instances/overview', {
				templateUrl : 'js/views/instances/overview.html',
				controller  : 'MainController'
			})
			.when('/instances/userServices', {
				templateUrl : 'js/views/instances/user_services.html',
				controller  : 'MainController'
			})
			.when('', {
				templateUrl : 'js/views/dashboard.html',
				controller  : 'MainController'
			})
			.when('/signup', {
				templateUrl : 'js/views/signup.html',
				controller  : 'MainController'
			})
			.when('/login', {
				templateUrl : 'js/views/login.html',
				controller  : 'MainController'
			})
			
		$routeProvider.otherwise({
			templateUrl:'js/views/dashboard.html',
			controller :'MainController'
		});
	console.log($routeProvider);



	});
