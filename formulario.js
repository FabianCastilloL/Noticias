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
                minlength: 3,
                maxlength: 20
            },
            email: {
                required: true,
                email: true
            },
            comentario: {
                required: true,
                minlength: 20
            },
            celular: {
                required: true,
                number: true,
                minlength: 8,
                maxlength: 8
            },
            mensaje: {
                required: true,
                minlength: 3,
                maxlength: 200
            },

        },
        messages: {
            nombre: {
                required: "Debes ingresar el nombre",
                minlength: "El nombre debe tener mas de 3 letras",
                maxlength: "El nombre exece la cantidad de letras o caracteres (40)"
            },
            apellido: {
                required: "Debes ingresar el apellido",
                minlength: "El apellido debe tener mas de 3 letras",
                maxlength: "El apellido exece la cantidad de letras o caracteres (40)"
            },
            email: {
                required: "Debes ingresar un email",
                email: "Debes ingresar un email válido ej: 'abcd@gmail.com'"
            },
            celular: {
                required: "debes ingresar un celular",
                number: "El celular debe contener 8 números",
                minlength: "El celular ingresado debe contener 8 numeros",
                maxlength: "El celular ingresado debe contener 8 numeros"
            },
            mensaje: {
                required: "Debes ingresar un mensaje",
                minlength: "El mensaje debe tener como minimo de 20 letras o caracteres",
                maxlength: "El mensaje debe tener mas de 20 letras o caracteres y como maximo 200 caracteres o letras"
            },
            

        },
    });
});

