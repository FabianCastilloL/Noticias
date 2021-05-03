link = "https://api.openweathermap.org/data/2.5/weather?q=Viña del mar&appid=40437191e9fa6d397945d4580ee2156f";
var request = new XMLHttpRequest();
request.open('GET', link, true);
request.onload = function() {
    var obj = JSON.parse(this.response);
    console.log(obj);

    document.getElementById('weather').innerHTML = obj.weather[0].description;
    document.getElementById('location').innerHTML = obj.name;
    document.getElementById('temp').innerHTML = parseInt(obj.main.temp - 273.15);
    document.getElementById('icon').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
}
if (request.status == 200) {
    console.log("ERROR");
}
request.send();