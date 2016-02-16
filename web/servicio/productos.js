app.factory('ListaProductos', function(){
	var listaProductos = [
	{
		id:0,
		nombre:'Papel',
		color: '#5d9b9b',
		tipo: 'Azul',
		imagen: 'http://www.inforeciclaje.com/imagenes/papel-reciclado.jpg',
		comoReciclar: '<ul> <li>* No se debe mezclar papel que se encuentra manchado con grasa, restos de alimentos  sustancias inflamables.</li><br><li>* Se debe tener en un lugar libre de humedad</li></ul>',
		comoAlargarVida:'<ul> <li>* Se debe tratar de usar las hojas de papel por ambos lados.</li><br></ul>',
		consecuencias: '<ul> <li>* Acelerar el calentamiento global por disminución de bosques a causa de la tala de árboles</li> <br> <li>* Contaminación del ambiente por el uso de químicos para la transformación de la celulosa en papel</li> <br>	<li>* Aumento de espacios para ser usados como botaderos</li> <br> <li>* La pérdida de especies animales que viven en los bosques que son destruidos</li> <br> </ul>',
		masInformacion: 'https://es.wikipedia.org/wiki/Reciclaje_de_papel',
	},
	{
		id:0,
		nombre:'Carton',
		color: '#5d9b9b',
		tipo: 'Azul',
		imagen: 'http://www.ocio.net/wp-content/uploads/2009/01/cartones.jpg',
		comoReciclar: '<ul> <li>* En el caso de las cajas de cartón deben ser desarmadas.</li><br><li>* Si esta junto con algún otro material estos deben ser separados del cartón</li> <br> <li>* Debe ser almacenado en lugares libres de humedad.</li><br></ul>',
		comoAlargarVida:'<ul> <li>* En el caso de las cajas de cartón pueden ser reutilizadas para almacenamiento.</li><br></ul>',
		consecuencias: '<ul> <li>* Acelerar el calentamiento global por disminución de bosques a causa de la tala de árboles</li> <br> <li>* Contaminación del ambiente por el uso de químicos para la transformación de la celulosa en papel</li> <br>	<li>* Aumento de espacios para ser usados como botaderos</li> <br> <li>* La pérdida de especies animales que viven en los bosques que son destruidos</li> <br> </ul>',
		masInformacion: 'https://es.wikipedia.org/wiki/Reciclaje_de_papel'
	},
	{
		id:0,
		nombre:'Papel',
		color: '#5d9b9b',
		imagen: 'http://www.inforeciclaje.com/imagenes/papel-reciclado.jpg',
		comoReciclar: '<ul> <li>* No se debe mezclar papel que se encuentra manchado con grasa, restos de alimentos  sustancias inflamables.</li><br><li>* Se debe tener en un lugar libre de humedad</li></ul>',
		comoAlargarVida:'<ul> <li>* Se debe tratar de usar las hojas de papel por ambos lados.</li><br></ul>',
		consecuencias: '<ul> <li>* Acelerar el calentamiento global por disminución de bosques a causa de la tala de árboles</li> <br> <li>* Contaminación del ambiente por el uso de químicos para la transformación de la celulosa en papel</li> <br>	<li>* Aumento de espacios para ser usados como botaderos</li> <br> <li>* La pérdida de especies animales que viven en los bosques que son destruidos</li> <br> </ul>',
		masInformacion: 'https://es.wikipedia.org/wiki/Reciclaje_de_papel',
		tipo: 'Amarillo'
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
		},

		busquedaPorTipo: function(tipo){
			var temp = [];
			for (var i = listaProductos.length - 1; i >= 0; i--) {
				if(listaProductos[i].tipo === tipo){
					temp.push(listaProductos[i]);
				}
			};
			return temp;
		}
	};
});