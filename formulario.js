$.validator.setDefaults({
    submitHandler: function () {
        alert("submitted!");
    }
});


$(document).ready(function () {
    $('#formulario_contacto').validate({
        rules: {
            nombre: {
                required: true,
                minlength: 4,
                maxlength: 25
            },
            apellido: {
                required: true,
                minlength: 4,
                maxlength: 25
            },
            email: {
                required: true,
                email: true
            },
            celular: {
                required: true,
                number: true,
                minlength: 8,
                maxlength: 8
            },
            mensaje: {
                required: true,
                minlength: 20,
                maxlength: 200
            },

        },
        messages: {
            nombre: {
                required: "Debes ingresar el nombre",
                minlength: "El nombre debe tener más de 3 caracteres",
                maxlength: "El nombre excede la cantidad de caracteres permitidos (25)"
            },
            apellido: {
                required: "Debes ingresar el apellido",
                minlength: "El apellido debe tener más de 3 caracteres",
                maxlength: "El apellido excede la cantidad de caracteres permitidos (25)"
            },
            email: {
                required: "Debes ingresar un email",
                email: "Debes ingresar un email válido ej: 'abcd@gmail.com'"
            },
            celular: {
                required: "Debes ingresar un celular",
                number: "El celular debe contener 8 números",
                minlength: "El celular ingresado debe contener 8 números",
                maxlength: "El celular ingresado debe contener 8 números"
            },
            mensaje: {
                required: "Debes ingresar un mensaje",
                minlength: "El mensaje debe tener como mínimo 20 caracteres",
                maxlength: "El mensaje debe tener como máximo 200 caracteres"
            },
            

        },
    });
});

