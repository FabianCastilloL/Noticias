(function() {
    var divMapa = document.getElementById('divMapa');
    var divCoordenadas = document.getElementById('divCoordenadas');

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function(objPosition) {
            var iLongitud = objPosition.coords.longitude,
                iLatitud = objPosition.coords.latitude;
            divCoordenadas.innerHTML = 'Latitud: ' + iLatitud + ' - Longitud: ' + iLongitud;
            var objCoordenadas = new google.maps.LatLng(iLatitud, iLongitud);

            var objOpciones = {
                mapTypedId: google.maps.MapTypeId.ROADMAP,
                zoom: 13,
                mapTypeControl: true,
                center: objCoordenadas
            };

            var objMapa = new google.maps.Map(divMapa, objOpciones);
            var objOpciones = new google.maps.Marker({
                title: 'Holanda que talca',
                position: objCoordenadas,
                map: objMapa
            });
        }, function(objError) {

            switch (objError.code) {
                case objError.POSITION_UNAVAILABLE:
                    divMapa.innerHTML = "La informacion de su posicion no está disponible";
                    break;
                case objError.TIMEOUT:
                    divMapa.innerHTML = "Tiempo de esper agotado.";
                    break;
                case objError.PERMISSION_DENIED:
                    divMapa.innerHTML = "El servicio ha tardado demasiado tiempo en responder.";
                    break;
                case objError.UNKNOWN_ERROR:
                    divMapa.innerHTML = "Error desconocido.";
                    break;
            }
        });
    } else {
        divCoordenadas.innerHTML = "Su navegador no soporta la API de geolocalización.";
    }
})();