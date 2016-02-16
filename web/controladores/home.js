app.controller('HomeController', function($scope,ngDialog,ListaProductos){
	console.log("Hola");
	$scope.listaProductos = ListaProductos.all();

	$scope.abrirPopUpProducto = function(producto){
		$scope.producto = producto;
		ngDialog.open({
			template: 'web/rutas/detallesProductoPopUp.html',
			scope: $scope
		});
	};

	$scope.filtradoPorTipo = function(tipo){
		console.log("hola");
		if(tipo === 'Todos'){
			$scope.listaProductos = ListaProductos.all();
		}else{
			$scope.listaProductos = ListaProductos.busquedaPorTipo(tipo);
		}
	}
})

.controller('NavController', function($scope){

})

.controller('AboutController', function($scope){
	console.log("Hola");
})

.controller('ContactoController', function($scope){
	console.log("Hola");
});