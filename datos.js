$.getJSON('https://mindicador.cl/api', function(data) {
    var indicadores = data;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    today = dd + '/' + mm + '/' + yyyy;

    $('#fecha').html(today);
    $('#uf').html(Math.trunc(indicadores.uf.valor) + ' ' + indicadores.uf.nombre + ' ' + indicadores.uf.unidad_medida);
    $('#dolar').html(Math.trunc(indicadores.dolar.valor) + ' ' + indicadores.dolar.nombre + ' ' + indicadores.dolar.unidad_medida);
    $('#euro').html(Math.trunc(indicadores.euro.valor) + ' ' + indicadores.euro.nombre + ' ' + indicadores.euro.unidad_medida);
}).fail(function() {
    console.log('Error al consumir la API!');
});