<<<<<<< HEAD
var app = angular.module('BasureroVerde', ['ui.router', 'toastr', 'uiGmapgoogle-maps']);
=======
var app = angular.module('BasureroVerde', ['ui.router','toastr','ngDialog']);
>>>>>>> 21028e1da74eb941ebef5eecf4ef3f4475c50197


app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    // HOME STATES AND NESTED VIEWS ========================================
    // Pagina Principal
        .state('home', {
            url: '/home',
            templateUrl: 'web/rutas/home.html',
            controller: 'HomeController'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'web/rutas/about.html',
            controller: 'AboutController'
        })
        .state('contacto', {
            url: '/contacto',
            templateUrl: 'web/rutas/contacto.html',
            controller: 'ContactoController'
        })
});
