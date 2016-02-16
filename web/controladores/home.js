app.controller('HomeController', function($scope,ListaProductos){
	console.log("Hola");
	$scope.listaProductos = ListaProductos.all();
	console.log(ListaProductos.all());
})

.controller('AboutController', function($scope){
	console.log("Hola");
})

.controller('ContactoController', function($scope){
	console.log("Hola");
});