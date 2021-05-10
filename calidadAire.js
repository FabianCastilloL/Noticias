fetch('https://sinca.mma.gob.cl/index.php/json/listadomapa2k19/')
    .then(response => response.json())
    .then(json => console.log(json))