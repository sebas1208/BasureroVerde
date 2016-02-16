app.factory('ListaProductos', function(){
	var listaProductos = [
	{
		id:0,
		nombre:'Papel',
		imagen: 'http://www.inforeciclaje.com/imagenes/papel-reciclado.jpg',
		descripcion: 'El papel es dificil de reciclar',
		masInformacion: 'google.com'
	}
	];

	return {
		all: function() {
			return listaProductos;
		},

		get: function(productoId) {
			for (var i = 0; i < listaProductos.length; i++) {
				if (listaProductos[i].id === parseInt(chatId)) {
					return listaProductos[i];
				}
			}
			return null;
		}
	};
});