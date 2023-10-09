function inicializarMapa() {
    var ubicacion = { lat: -34.5956145, lng: -58.4431949 }; // Coordenadas de ejemplo (Nueva York)
    var mapa = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 14,
        center: ubicacion
    });
    var marcador = new google.maps.Marker({
        position: ubicacion,
        map: mapa,
        title: 'Ubicación de ejemplo'
    });
}

document.addEventListener('DOMContentLoaded', function () {
    inicializarMapa();
});

//suscribete
/*document.addEventListener('DOMContentLoaded', function () {
    let formulario = document.getElementById('formul');
    formulario.addEventListener('submit', function () {
        formulario.reset();
    });
});


document.addEventListener('DOMContentLoaded', function () {
    let contacto = document.getElementById('contacto');
    contacto.addEventListener('submit', function () {
        contacto.reset();
    });
});*/


