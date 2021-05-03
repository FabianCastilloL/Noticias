function validarFormulario() {

    $('.alert').remove();


    var nombre = $('#nombre').val(),
        apellido = $('#apellido').val(),
        correo = $('#correo').val(),
        celular = $('#celular').val(),
        mensaje = $('#mensaje').val();


    if (nombre == "" || nombre == null) {

        cambiarColor("nombre");

        mostraAlerta("Campo obligatorio");
        return false;
    } else {
        var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if (!expresion.test(nombre)) {

            cambiarColor("nombre");
            mostraAlerta("Debes completar el campo Nombre");
            return false;
        }
    }


    if (apellido == "" || apellido == null) {

        cambiarColor("apellido");

        mostraAlerta("Campo obligatorio");
        return false;
    } else {
        var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if (!expresion.test(apellido)) {

            cambiarColor("apellido");
            mostraAlerta("Debes completar el campo Apellido");
            return false;
        }
    }


    if (correo == "" || correo == null) {

        cambiarColor("correo");

        mostraAlerta("Campo obligatorio");
        return false;
    } else {
        var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if (!expresion.test(correo)) {

            cambiarColor("correo");
            mostraAlerta("Debes ingresar un E-mail válido");
            return false;
        }
    }


    if (celular == "" || celular == null) {

        cambiarColor("celular");

        mostraAlerta("Campo obligatorio");
        return false;
    } else {
        var expresion = /^\d{7,14}$/
        if (!expresion.test(celular)) {

            cambiarColor("celular");
            mostraAlerta("Debes ingresar un celular");
            return false;
        }
    }

    if (mensaje == "" || mensaje == null) {

        cambiarColor("mensaje");

        mostraAlerta("Campo obligatorio");
        return false;
    } else {
        var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if (!expresion.test(mensaje)) {

            cambiarColor("mensaje");
            mostraAlerta("Debes completar el campo Mensaje");
            return false;
        }
    }

    $('form').submit();
    return true;

}

$('input').focus(function() {
    $('.alert').remove();
    colorDefault('nombre');
    colorDefault('apellido');
    colorDefault('correo');
    colorDefault('celular');
    colorDefault('mensaje');

});

$('textarea').focus(function() {
    $('.alert').remove();
    colorDefault('mensaje');
});


function colorDefault(dato) {
    $('#' + dato).css({
        border: "1px solid #999"
    });
}


function cambiarColor(dato) {
    $('#' + dato).css({
        border: "1px solid #dd5144"
    });
}



function mostraAlerta(texto) {
    $('#nombre').before('<div class="alert">Error: ' + texto + '</div>');
}