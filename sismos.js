let url = 'https://api.gael.cloud/general/public/sismos'
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data)
    let body = ''
    for (let i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].Fecha}</td><td>${data[i].Profundidad}</td><td>${data[i].Magnitud}</td><td>${data[i].RefGeografica}</td></tr>`

    }
    document.getElementById('data').innerHTML = body
}