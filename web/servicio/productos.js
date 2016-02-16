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
		nombre:'Botellas de plástico',
		color: '#5d9b9b',
		tipo: 'Amarillo',
		imagen: 'http://m1.newstodayworld.org/i/134/1349193/6-manualidades-hechas-botellas-plastico-vacia-L-09FciV.jpeg',
		comoReciclar: '<ul> <li>* En la ciudad de Quito existen muchos <a href="#/contacto">centros de recepción</a> de reciclaje a los cuales se puede llevar las botellas.</li><br></ul>',
		comoAlargarVida:'<ul> <li>* Pueden ser usadas en la elaboración de artesanías, recuerdos, juguetes, etc</li><br>  <li>* Pueden ser usados para almacenamiento </li><br> <li>* Pueden ser usadas como maceteros en los jardines</li><br></ul>',
		consecuencias: '<ul> <li>* En tierra firme, sobre todo en la península, estos depósitos, pueden provocar incendios o hacer de acelerante en el verano. Destruyendo aún más extensiones de ecosistemas.</li> <br> <li>* Las botellas de plástico tardan hasta 10000 millones de años en descomponerse.</li> <br> </ul>',
		masInformacion: 'https://es.wikipedia.org/wiki/Reciclado_de_pl%C3%A1stico',
	}
	,{
		id:0,
		nombre:'Latas',
		color: '#5d9b9b',
		tipo: 'Amarillo',
		imagen: 'http://www.ecologiaverde.com/wp-content/2011/03/Las-latas-de-aluminio-recicladas-ahorran-agua-y-energia.jpg',
		comoReciclar: '<ul> <li>* Reciclar el aluminio reduce en un 95% la contaminación atmosférica generada durante su fabricación y fabricar aluminio a partir de aluminio reciclado requiere el 90% menos de energía que partir del mineral original.</li> <br> <li>* El mejor reciclaje es aquel que no llega a producirse.</li> <br> <li>* Evitar la adquisición de productos con envase metálico si no resulta estrictamente necesario.</li></ul>',
		comoAlargarVida:'<ul> <li>* Pueden utilizarse como portalápices.</li> <br> <li>* Recipientes para cultivar plantas.</li> <br> <li>* Todo tipo de artesanias: alcancias, comederos para pájaros, entre otros.</li></ul>',
		consecuencias: '<ul><li>* Para la recuperación del acero de las latas es preciso desestañarlas y extraerles el aluminio. Éste es un proceso bastante contaminante, aunque mucho menos que el de producir acero de nuevo.</li> <br> <li>* Consumos altísimos de energía para la extracción y purificación de los materiales de los que están hechas las latas como el aluminio.</li> <br> <li>* Destrucción de los lugares de donde se extrae los elementos para su fabricación tales como las Bauxita y petróleo. </li> <br></ul>',
		masInformacion: 'https://es.wikipedia.org/wiki/Reciclaje_de_aluminio',
	}
	,{
		id:0,
		nombre:'Las pilas y baterías.',
		color: '#5d9b9b',
		tipo: 'Negro/Gris',
		imagen: 'http://www.ecologiaverde.com/wp-content/2015/06/muchas-piolas.jpg',
		comoReciclar: '<ul> <li>* Mezclan con cal para formar bloques y así elaborar monumentos u otro tipo de construcciones.</li> <br> <li>* Guardarlas dentro de recipientes plásticos hasta poder llevarlas a una recicladora donde le darán el trato adecuado para su reciclaje.</li> <br></ul>',
		comoAlargarVida:'<ul><li>* Reemplazar las comunes por las recargables, que tienen una vida útil mucho más larga.</li> <br> <li>* Consecuencias de no hacerlo (daños al ambiente o a la salud).</li> <br> <li>* Las pilas gastadas son altamente contaminantes y no debemos arrojarlas al tacho de basura junto con el resto de los residuos, ya que esos metales que contiene, al salir a la superficie, fluyen por el suelo contaminando toda forma de vida.</li> <br> <li>* Una sola pila de reloj puede contaminar 600 mil litros de agua, cantidad que consume una familia en año y medio.</li> </ul>',
		consecuencias: '<ul> <li>* Daños al medio ambiente. Destrucción de la naturaleza.</li></ul>',
		masInformacion: 'https://es.wikipedia.org/wiki/Reciclaje_de_pilas_y_bater%C3%ADas',
	}
	,{
		id:0,
		nombre:'Fundas de plástico',
		color: '#5d9b9b',
		tipo: 'Amarillo',
		imagen: 'http://guimsa.com/img/productos/producto214_1.jpg',
		comoReciclar: '<ul> <li>* Las fundas plásticas pueden ser recicladas como cualquier otro tipo de plástico.</li> <br> <li>* Utilizar las bolsas de plástico para la basura en vez de comprar bolsas nuevas.</li> <br> <li>*Volver a llevar la misma bolsa plástica para realizar otras compras e intenta no pedir más bolsas.</li> <br> <li>*Intentar sacar el mayor provecho a la capacidad y resistencia de la bolsa, ya que muchas veces nos intentan poner 7 diferentes productos en 7 diferentes bolsas, cuando es muy probable que todo quepa en dos o incluso en una.</li> </ul>',
		comoAlargarVida:'<ul> <li>* Buscar otro tipo de bolsas o equivalentes que no sean descartables. Por ejemplo, bolsas de tela o de cuerda, cestas, canastas o cajas.</li> <br> <li>*Utilizarlas tantas veces como pueda. Por ejemplo, usarlas para guardar comida, para guardar ropa u otros objetos.</li> <br></ul>',
		consecuencias: '<ul> <li>* Las bolsas de plástico que se acumulan en zonas marinas u otros hábitats pueden ser confundidos por los animales de la zona con alimentos y morir por asfixia o a causa de la ingestión de plástico.</li><br> <li>*Se calcula que alrededor de un millón de aves y unos 100.000 mamíferos mueren al año por culpa de la ingesta de bolsas de plástico.</li></ul>',
		masInformacion: 'https://es.wikipedia.org/wiki/Reciclado_de_pl%C3%A1stico',
	}
	,{
		id:0,
		nombre:'Madera',
		color: '#5d9b9b',
		tipo: 'Naranja',
		imagen: 'http://thumbs.dreamstime.com/x/madera-del-desecho-en-un-salto-de-reciclaje-14188092.jpg',
		comoReciclar: '<ul><li>* Puede ser triturada y utilizada para la fabricación de tableros aglomerados y cintas de películas, de esta forma se ahorra significativamente energía y materia prima, ya que para fabricar una tonelada de aglomerado se necesitan 6 árboles, utilizando madera reciclada no es necesario talar ninguno.</li> <br> <li>* Otra de las formas de reciclaje de la madera es la conversión de ésta en compost que es una mezcla de materia orgánica descompuesta y transformada en una rica enmienda para el suelo. Las virutas de madera y el aserrín es un buen material para compostar ya que es rico en carbono.</li> <br></ul>',
		comoAlargarVida:'<ul> <li>* Reutilizarlas para hacer <a href="http://manualidades.facilisimo.com/blogs/mas-manualidades/manualidades-con-madera-reciclada_814765.html">manualidades</a>.</li> <br> </ul>',
		consecuencias: '<ul> <li>* Tala indiscriminada de árboles.</li> <br> <li>* Reducción de áreas arboladas que absorben el CO2, gas que ha aumentado con las actividades industriales y el uso de vehículos y que incrementa el efecto invernadero.</li> <br></ul>',
		masInformacion: 'http://bricolaje.facilisimo.com/reciclar-madera',
	}
	,{
		id:0,
		nombre:'Tetrapack',
		color: '#5d9b9b',
		tipo: 'Negro/Gris',
		imagen: 'http://verdeporquetequieroverde.files.wordpress.com/2010/05/tetra-pack_lpic-0624.jpg',
		comoReciclar: '<ul><li>* El tetrapack puede ser reciclado por medio de varios métodos, el más fácil es el de separar sus componentes y reutilizarlos ya separados, esto se logra por medio de la agitación del material con agua y de esta forma se logra despegar el plástico, el papel y el aluminio.</li> <br></ul>',
		comoAlargarVida:'<ul><li>* Basta con abrir toda la costura del cierre y cortar los bordes muy prolijamente. Luego, forramos con el material que más nos guste: papel de regalo, papel vinílico adhesivo, láminas de metal, etc. Una vez que esté bien seco y prolijo, elegimos un diseño sencillo y vamos perforando con una aguja gruesa, atravesando todas las capas. </li></ul>',
		consecuencias: '<ul> <li>* El tetrapack es un riesgo para los suelos, debido a que no es biodegradable y su constitución es muy difícil de deshacer, al estar unidas varias capas de aluminio, papel y plástico se vuelve casi imposible que por medios naturales se separen estos componentes, debido a esto pueden pasar miles de años y el envase apenas mostrará signos de desgaste.</li> <br></ul>',
		masInformacion: 'http://www.tetrapak.com/mx/sustainability/recycling',
	}
	,{
		id:0,
		nombre:'Materia Orgánica (Desperdicios alimentarios)',
		color: '#5d9b9b',
		tipo: 'Naranja',
		imagen: 'http://cdn5.upsocl.com/wp-content/uploads/imverde/2014/10/bananas.jpg',
		comoReciclar: '<ul><li>* No se pueden reciclar. Pero sí se puede alargar su vida útil</li></ul>',
		comoAlargarVida:'<ul> <li>* Hacer abono para fertilizar tierra que de otra forma no sería fértil para el cultivo y ahorramos el consumo de costosos fertilizantes, para ello necesitamos cáscaras de huevo, de verduras y frutas, aserrín, papel de diario viejo y tierra, con esos pocos ingredientes en pocas semanas podremos obtener un buen abono para tu propio huerto. </li> <br></ul>',
		consecuencias: '<ul> <li>* Los alimentos que tiramos innecesariamente son responsables del equivalente a 18 millones de toneladas de emisiones de dióxido de carbono cada año. No sólo por los gases que se liberan cuando los alimentos se descomponen, sino por la energía que se gasta en su producción, empaquetado, almacenado y transporte.</li> <br></ul>',
		masInformacion: 'http://bricolaje.facilisimo.com/reciclar-madera',
	}
	,{
		id:0,
		nombre:'Pinturas y aceites.',
		color: '#5d9b9b',
		tipo: 'Rojo',
		imagen: 'http://cdna.labioguia.com/images/articles/564f4628e42de_crop.jpg',
		comoReciclar: '<ul><li>* La pintura seca no daña al medio ambiente. Para secar pintura látex (1 pulgada o menos), abre la lata hasta secarse. Para acelerar el proceso, mezcla aserrín o piedras sanitarias en la lata si es poca pintura, o en una bolsa grande si es mucha. Ya seca, se puede ir en la basura.</li></ul>',
		comoAlargarVida:'<ul><li>* Las pinturas de látex pueden ser mezcladas y utilizadas, sin embargo, para las capas de base y trabajos de pintura funcionales, esta es una forma económica y respetuosa con el medio ambiente para reutilizar la pintura vieja. Se recomienda también, consultar con transportistas de residuos locales, municipalidades y escuelas. Muchos tienen programas para recoger las pinturas, combinarlas y utilizarlas en proyectos para la comunidad.</li></ul>',
		consecuencias: '<ul> <li>*  Las pinturas tienen un impacto ambiental importante, de modo que un objetivo será reducir su uso siempre que no sea necesario.</li></ul>',
		masInformacion: 'http://bricolaje.facilisimo.com/reciclar-madera',
	}
	,{
		id:0,
		nombre:'Teléfono móvil',
		color: '#5d9b9b',
		tipo: 'Negro/Gris',
		imagen: 'http://tynmedia.com/tynmag/wp-content/uploads/sites/3/2014/11/31607_6202.jpg',
		comoReciclar: '<ul><li>* Equipos son fundidos a 1200 grados de temperatura, con el fin de poder separar los diferentes metales y plásticos que lo componen, y de esta manera poder realizar el reciclaje posterior.</li></ul>',
		comoAlargarVida:'<ul> <li>* Concientizar sobre la necesidad de adquirir un nuevo dispositivo móvil.</li></ul>',
		consecuencias: '<ul><li>* Este tipo de equipos tienen grandes <a href="http://www.planverde.df.gob.mx/cverd/57-residuos-solidos/576-contaminantes-electricos-y-sus-consecuencias.html">consecuencias al medio ambiente</a>. Debido a sus diferentes componentes.</ul>',
		masInformacion: 'http://www.planverde.df.gob.mx/cverd/57-residuos-solidos/576-contaminantes-electricos-y-sus-consecuencias.html',
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
