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

.controller('NavController', function($scope){})

.controller('AboutController', function ($scope) {})

.controller('ContactoController', function ($scope) {

    var cities = [
        {
            city: 'RECICLAJES MYS S.A.',
            desc: 'Avenida Pedro Vicente Maldonado S42.28',
            lat: -0.2918392,
            long: -78.5404483
    },
        {
            city: 'ASOCIACIÓN ARTESANAL DE RECICLAJE',
            desc: 'Parroquia Chaupicruz',
            lat: -0.151335,
            long: -78.4594319
    },
        {
            city: 'ENKADOR S.A.',
            desc: 'Sangolquí, Barrio Selva Alegre',
            lat: -0.3457132,
            long: -78.4347653
    },
        {
            city: 'REY PROPAPEL CIA. LTDA.',
            desc: 'José Andrade y Vicente Duque',
            lat: -0.0992615,
            long: -78.4794187
    },
        {
            city: 'EMPRESA DE TRATAMIENTO DE RESIDUOS ETR S.A.',
            desc: 'Sector El Beaterio',
            lat: -0.3182113,
            long: -78.5442619
    },
        {
            city: 'BIORECICLAR CIA. LTDA.',
            desc: 'Panamericana Sur Km. 15 1/2',
            lat: -0.3432424,
            long: -78.5658648
    },
        {
            city: 'PUNTO 1 DE RECICLAJE',
            desc: 'Diagonal al mercado de la Ofelia',
            lat: -0.1125316,
            long: -78.4928332
    },
        {
            city: 'PUNTO 2 DE RECICLAJE',
            desc: 'Parqueadero de la Carolina',
            lat: -0.1843436,
            long: -78.4873267
    },
        {
            city: 'PUNTO 3 DE RECICLAJE',
            desc: 'Parqueadero del Parque Inglés',
            lat: -0.1324468,
            long: -78.5011788
    },
        {
            city: 'PUNTO 4 DE RECICLAJE',
            desc: 'Parqueadero del Parque El Ejido',
            lat: -0.20904,
            long: -78.5008237
    },
        {
            city: 'PUNTO 5 DE RECICLAJE',
            desc: 'Tras el Parque de Solanda',
            lat: -0.2650508,
            long: -78.5416414
    },
        {
            city: 'PUNTO 6 DE RECICLAJE',
            desc: 'Sector Terminal Terrestre',
            lat: -0.2649595,
            long: -78.5744725
    }
];


    var mapOptions = {
        zoom: 11,
        center: new google.maps.LatLng(-0.2194899, -78.5225057),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();

    var createMarker = function (info) {

        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);

    }

    for (i = 0; i < cities.length; i++) {
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function (e, selectedMarker) {
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click', 'resize');
    }

});