

	
function mostrar_objeto(obj){

	for(var prop in obj){
		document.write(prop + ': '+obj[prop] + '<br>');
	}
}	
	
function getAddressInMap2( address ){
    //document.getElementById('mapa').innerHTML = address;


}	

//Ejemplo: address = 'Holguin, Cuba'
function getAddressInMap( address ){

	// Obtenemos la direcci�n y la asignamos a una variable
	//var address = 'Holguin, Cuba';
	// Creamos el Objeto Geocoder
	var geocoder = new google.maps.Geocoder();
	// Hacemos la petici�n indicando la direcci�n e invocamos la funci�n
	// geocodeResult enviando todo el resultado obtenido
	geocoder.geocode({ 'address': address}, geocodeResult);
	//var mapa = document.getElementById('mapa');
        //mapa.innerHTML = 'Rolando Cruz';
	function geocodeResult(results, status) {
		// Verificamos el estatus
		if (status == 'OK') {
                        
			// Si hay resultados encontrados, centramos y repintamos el mapa
			// esto para eliminar cualquier pin antes puesto
			var mapOptions = {
				center: results[0].geometry.location,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			
			//var mapa = document.getElementById('mapa');
                        var mapa = $('#mapa')[0];
			
			map = new google.maps.Map(mapa, mapOptions);                     
                        
			// fitBounds acercar� el mapa con el zoom adecuado de acuerdo a lo buscado
			map.fitBounds(results[0].geometry.viewport);
			// Dibujamos un marcador con la ubicaci�n del primer resultado obtenido
			var markerOptions = { position: results[0].geometry.location }
			var marker = new google.maps.Marker(markerOptions);
			marker.setMap(map);
		} else {
			// En caso de no haber resultados o que haya ocurrido un error
			// lanzamos un mensaje con el error
			alert("Geocoding no tuvo exito debido a: " + status);
		}
	}
}
		
			