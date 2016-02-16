var app = angular.module('BasureroVerde', ['ui.router','toastr']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/index');

	$stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        // Pagina Principal
        .state('index', {
        	url: '/index',
        	templateUrl: 'web/rutas/content.html',
        	controller:'HomeController'
        })
    });