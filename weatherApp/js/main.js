$(document).ready(function() {

    $("#submitCity").click(function() {
        return getWeather();
    });

});

function getWeather() {
    const key = '26b196d1c04ecf94ed7cef30ed360fdd';
    var city = $("#city").val();

    if (city != "") {

        $.ajax({

            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=" + key,
            type: "GET",
            datatype: "jsonp",
            success: function(data) {
                console.log(data);
                var widget = showResults(data);
                $("#showWeather").html(widget);
                $("#city").val('');
            }

        });

    } else {
        $("#error").html("<div>La ciudad no puede estar vacia</div>")
    }

}

function showResults(data) {

    return "<h3>Clima actual en: " + data.name + ', ' + data.sys.country + "</h3>" +
        "<p>Clima: " + data.weather[0].main + "</p>" +
        "<p>Descripción del Clima: " + data.weather[0].description + "</p>" +
        "<p>Temperatura: " + data.main.temp + " &deg;C</p>" +
        "<p>Presión: " + data.main.pressure + " Hpa</p>" +
        "<p>Humedad: " + data.main.humidity + " %</p>" +
        "<p>Temperatira Minima: " + data.main.temp_min + " &deg;C </p>" +
        "<p>Temperatura Máxima: " + data.main.temp_max + " &deg;C</p>" +
        "<p>Velocidad del Viento: " + data.wind.speed + " m/s</p>" +
        "<p>Dirección del Viento: " + data.wind.deg + " &deg;</p>";


}